import logging 

def configure_logging():
    """configure logging module"""
    logging.basicConfig(
        # filename=CONFIG["LOGGING_FILE"],
        level=logging.INFO,
        format="%(asctime)s: %(levelname)7s: [%(name)s]: %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )


