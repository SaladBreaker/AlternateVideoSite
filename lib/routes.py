
from lib.app import app
from flask import render_template, url_for, redirect, flash, request

import logging

logger = logging.getLogger(__name__)


@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")
