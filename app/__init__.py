from flask import Flask
from flask.ext.moment import Moment
from config import config

moment = Moment()


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    moment.init_app(app)

    from main import main as main_blueprint
    from bdapi import bdapi as bdapi_blueprint
    from autooper import autooper as autooper_blueprint
    app.register_blueprint(main_blueprint)
    app.register_blueprint(bdapi_blueprint, url_prefix='/bdapi')
    app.register_blueprint(autooper_blueprint,url_prefix='/autooper')

    return app
