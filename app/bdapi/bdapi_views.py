from . import bdapi
from flask import render_template,url_for,redirect


@bdapi.route("/translate")
def translate():
    return render_template('bdapi/translate.html')


