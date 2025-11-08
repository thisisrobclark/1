# Web Tools Collection

A collection of simple, useful web applications.

## 📱 Instagram Reels Analytics App

A simple, lightweight web application for analyzing Instagram Reels performance from CSV files.

## 🎬 YouTube Transcript Extractor

A tool to extract and display transcripts from YouTube videos.

---

## 📱 Instagram Reels Analytics - Features

- 📊 Upload and parse CSV files containing Instagram Reels analytics
- 📈 Visual bar chart showing views by Reel
- 📋 Detailed data table with all metrics
- 🎯 Key performance indicators (KPIs):
  - Total Reels count
  - Total Views
  - Total Likes
  - Average Engagement Rate
  - Total Reach
- 🎨 Beautiful, responsive UI with gradient design
- 🚀 No installation required - runs directly in your browser

### How to Use Instagram Reels Analytics

1. **Open the App**
   - Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge)

2. **Upload Your CSV File**
   - Click the upload area or drag and drop your CSV file
   - You can use the included `sample-reels-analytics.csv` file to test the app

3. **View Your Analytics**
   - The app will automatically display:
     - Summary statistics at the top
     - A bar chart showing views for each Reel
     - A detailed table with all your data

## CSV File Format

Your CSV file should include the following columns (in any order):

- **Reel ID**: Unique identifier for each Reel
- **Title**: Reel title or description
- **Date Posted**: Publication date
- **Views**: Number of views
- **Likes**: Number of likes
- **Comments**: Number of comments
- **Shares**: Number of shares
- **Saves**: Number of saves
- **Reach**: Total reach
- **Engagement Rate**: Engagement percentage

### Example CSV Format:

```csv
Reel ID,Title,Date Posted,Views,Likes,Comments,Shares,Saves,Reach,Engagement Rate
R001,Morning Routine Tips,2024-01-15,45230,3421,287,892,1205,38450,12.8
R002,Quick Recipe: Pasta,2024-01-18,62150,4892,412,1340,2103,51200,14.2
```

## Exporting Your Instagram Reels Analytics

To get your actual Instagram Reels analytics:

1. Go to Instagram Professional Dashboard
2. Navigate to Insights
3. Select the Reels you want to analyze
4. Export the data to CSV format
5. Upload the CSV file to this app

Note: Instagram's native export format may vary. You might need to adjust column names to match the expected format.

## Technical Details

- **Technology**: Pure HTML5, CSS3, and vanilla JavaScript
- **Dependencies**: None! No external libraries required
- **Browser Support**: Works in all modern browsers
- **File Processing**: Client-side only (your data never leaves your computer)

### Privacy

All data processing happens locally in your browser. No data is sent to any server, ensuring your analytics remain completely private.

---

## 🎬 YouTube Transcript Extractor - Features

- 🎥 Extract transcripts from any YouTube video
- ⏱️ Display timestamps with each transcript line
- 📊 Statistics: total lines, word count, and video duration
- 📋 Copy transcript to clipboard
- 🎨 Beautiful, responsive UI with gradient design
- 🚀 Fast and easy to use

### How to Use YouTube Transcript Extractor

#### Prerequisites

Before using the YouTube Transcript Extractor, you need to have Node.js installed on your system.

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Server**
   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`

4. **Open the App**
   - Open `youtube-transcript.html` in your web browser
   - Or navigate to the file directly

5. **Extract a Transcript**
   - Paste a YouTube URL (e.g., `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
   - Or just enter the video ID (e.g., `dQw4w9WgXcQ`)
   - Click "Get Transcript"
   - View the transcript with timestamps
   - Copy to clipboard if needed

### Requirements

- Node.js (v14 or higher recommended)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (to fetch transcripts from YouTube)

### Important Notes

- The video must have captions/transcripts available
- Auto-generated transcripts are supported
- Some videos may have transcripts disabled by the uploader
- The server must be running for the web interface to work

### Technical Details

- **Backend**: Node.js with Express
- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **Dependencies**:
  - express - Web server framework
  - cors - Enable cross-origin requests
  - youtube-transcript - Fetch YouTube transcripts
- **API Endpoint**: `GET /transcript/:videoId`

### Troubleshooting

**"Failed to fetch transcript"**
- Make sure the server is running (`npm start`)
- Check that the video has captions available
- Verify the video ID is correct

**"No transcript found"**
- The video may not have captions enabled
- Try a different video that you know has subtitles

**Server won't start**
- Make sure you ran `npm install` first
- Check that port 3000 is not already in use
- Try a different port by setting the PORT environment variable: `PORT=3001 npm start`

---

## Files Included

### Instagram Reels Analytics
- `index.html` - Main application file
- `sample-reels-analytics.csv` - Sample data for testing

### YouTube Transcript Extractor
- `youtube-transcript.html` - Frontend interface
- `server.js` - Backend API server
- `package.json` - Node.js dependencies

### Documentation
- `README.md` - This file

## License

Free to use and modify for personal and commercial purposes.
