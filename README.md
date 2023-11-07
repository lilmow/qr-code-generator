# QR Code Generator

This project is a QR code generator website that enables users to create QR codes for various purposes including website URLs, social media profiles, or custom messages.

## Features

- **QR Code Generation:** Users can input a URL or text message in the provided field and click the 'Generate' button to create a QR code.
- **Instant Preview:** The website provides an instant preview of the generated QR code below the input field.
- **Download Option:** After generating the QR code, users can click the 'Save' button to download the QR code image.

## Project Structure

- `index.html`: The main HTML file with the structure of the web page.
- `styles.css`: Contains the CSS styles for the website layout and design.
- `script.js`: Manages the interactivity, including QR code generation and image download functionality.

## How It Works

- The JavaScript code within `script.js` fetches the necessary elements from the HTML and listens for user actions.
- When the 'Generate' button is clicked, it fetches the user's input, generates a QR code using the QRC Generator API, and displays it on the webpage.
- Clicking the 'Save' button triggers the download of the generated QR code image.

## Usage

To use the QR Code Generator:
1. Open [the live version here](https://qr-code-by-tech-ninja.netlify.app/) in a web browser.
2. Enter the URL or message in the provided input field.
3. Click the 'Generate' button to create the QR code instantly.
4. To save the generated QR code, click the 'Save' button.


**Note:** The QR code generated is based on the entered URL or message; for working URLs, the generated code can be scanned by a QR code scanner app.