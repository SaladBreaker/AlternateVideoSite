from setting import configure_logging
from lib.app import app
import logging

logger = logging.getLogger(__name__)

if __name__ == "__main__":
    configure_logging()
    app.run(debug=True)
