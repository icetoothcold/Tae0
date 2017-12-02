__author__ = 'lyan'
from flask import Blueprint

bdapi = Blueprint('bdapi', __name__)

from . import bdapi_views