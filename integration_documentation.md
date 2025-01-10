# Trapi Demo Backend Integration Documentation

## General Overview

This documentation provides a comprehensive guide to integrating and running the Trapi Demo Backend, which is primarily a Python-based backend template. The backend is designed to facilitate testing of the Trapi automated integration tool with various APIs, including Duffel and FlightView. The integration includes endpoints for searching flights and hotels, as well as fetching flight data. The backend is built using Flask and FastAPI, with additional support for Express.js for Node.js-based components.

## Quick Start Guide

### Prerequisites

- Python 3.8 or higher
- Node.js 14.x or higher
- pip (Python package manager)
- npm (Node package manager)
- Firebase Admin SDK credentials (serviceAccountKey.json)
- Duffel API Key

### Running the Backend Server Locally

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add your Duffel API key:

   ```plaintext
   DUFFEL_API_KEY=your_duffel_api_key
   ```

3. **Install Python Dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask Backend:**

   ```bash
   python main.py
   ```

   The server will start on `http://localhost:5000`.

5. **Run the Node.js Backend:**

   Navigate to the directory containing `node-backend.js` and run:

   ```bash
   npm install
   node node-backend.js
   ```

   The server will start on `http://localhost:6000`.

### Running the Backend Server Remotely

To deploy the backend server remotely, consider using cloud platforms like AWS, Heroku, or Google Cloud. Ensure that environment variables are correctly set up in the cloud environment.

### Running the Frontend Locally

The frontend is not included in this repository. Ensure you have a compatible frontend setup that can interact with the backend APIs.

### Running the Frontend Remotely

Deploy the frontend on a cloud platform or hosting service that supports your frontend framework. Ensure it can communicate with the backend endpoints.

### Testing Options

Integration tests are available in `integration_tests.py`. To run the tests:

```bash
pytest integration_tests.py
```

Ensure the backend server is running before executing the tests.

## Troubleshooting Guide

- **Issue: Server not starting**
  - Ensure all dependencies are installed.
  - Check if the correct Python and Node.js versions are being used.
  - Verify that the `.env` file is correctly configured.

- **Issue: API requests failing**
  - Check if the Duffel API key is valid and has the necessary permissions.
  - Ensure the Firebase Admin SDK credentials are correctly set up.

- **Issue: CORS errors**
  - Verify that CORS is enabled in the backend configuration.

## Support Contact Info

For support, please contact the Trapi team at support@trapi.com.

## Links to API Provider Docs

- [Duffel API Documentation](https://duffel.com/docs/api)
- [FlightView API Documentation](https://flightview.com/developers/api)

This documentation should provide a solid foundation for integrating and running the Trapi Demo Backend. For further assistance, please refer to the support contact information provided above.