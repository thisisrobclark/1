# Instagram Reels Analytics App

A simple, lightweight web application for analyzing Instagram Reels performance from CSV files.

## Features

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

## How to Use

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

## Files Included

- `index.html` - Main application file
- `sample-reels-analytics.csv` - Sample data for testing
- `README.md` - This file

## Privacy

All data processing happens locally in your browser. No data is sent to any server, ensuring your analytics remain completely private.

## License

Free to use and modify for personal and commercial purposes.
