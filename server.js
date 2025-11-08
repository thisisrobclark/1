const express = require('express');
const cors = require('cors');
const { YoutubeTranscript } = require('youtube-transcript');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'YouTube Transcript API is running',
        endpoints: {
            transcript: '/transcript/:videoId',
            health: '/'
        }
    });
});

// Get transcript endpoint
app.get('/transcript/:videoId', async (req, res) => {
    try {
        const { videoId } = req.params;

        if (!videoId) {
            return res.status(400).json({
                error: 'Video ID is required'
            });
        }

        console.log(`Fetching transcript for video: ${videoId}`);

        // Fetch the transcript
        const transcript = await YoutubeTranscript.fetchTranscript(videoId);

        if (!transcript || transcript.length === 0) {
            return res.status(404).json({
                error: 'No transcript found for this video. The video may not have captions available.'
            });
        }

        console.log(`Successfully fetched ${transcript.length} transcript entries`);

        res.json(transcript);
    } catch (error) {
        console.error('Error fetching transcript:', error.message);

        // Handle specific error cases
        if (error.message.includes('Could not find video')) {
            return res.status(404).json({
                error: 'Video not found. Please check the video ID and try again.'
            });
        }

        if (error.message.includes('Transcript is disabled')) {
            return res.status(404).json({
                error: 'Transcripts are disabled for this video.'
            });
        }

        if (error.message.includes('No transcripts available')) {
            return res.status(404).json({
                error: 'No transcripts are available for this video.'
            });
        }

        res.status(500).json({
            error: 'Failed to fetch transcript',
            details: error.message
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unexpected error:', err);
    res.status(500).json({
        error: 'Internal server error',
        details: err.message
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 YouTube Transcript API server is running on http://localhost:${PORT}`);
    console.log(`📝 Open youtube-transcript.html in your browser to use the interface`);
});
