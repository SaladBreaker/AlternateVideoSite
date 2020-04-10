from flask import Flask
import logging
from flask_wtf.csrf import CSRFProtect

logger = logging.getLogger(__name__)

try:
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "qSrbDdD5vTM4XEiG"
    csrf = CSRFProtect(app)
    csrf.init_app(app)
except Exception as e:
    logger.debug(f"Could not load app! Error: {e}")
    raise e

logger.debug("Database loaded!")
import lib.routes
