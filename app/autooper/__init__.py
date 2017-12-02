__author__ = 'lyan'
from flask import Blueprint

autooper = Blueprint('autooper', __name__)

from . import autooper_views