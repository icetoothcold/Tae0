__author__ = 'lyan'
from . import autooper
import psutil
from flask import render_template,url_for,redirect,jsonify


@autooper.route("/sysinfo")
def sysinfo():
    cpu = psutil.cpu_times()
    user = cpu.user
    nice = cpu.nice
    system = cpu.system
    idle = cpu.idle
    iowait = cpu.iowait
    irq = cpu.irq
    softirq = cpu.softirq
    steal = cpu.steal
    guest = cpu.guest

    return render_template("autooper/sysinfo.html",
                           user=user, nice=nice, system=system,
                           idle=idle, iowait=iowait, irq=irq,
                           softirq=softirq, steal=steal, guest=guest)


@autooper.route("/sysinforefresh")
def sysinforefresh():
    cpu = psutil.cpu_times()
    user = cpu.user
    nice = cpu.nice
    system = cpu.system
    idle = cpu.idle
    iowait = cpu.iowait
    irq = cpu.irq
    softirq = cpu.softirq
    steal = cpu.steal
    guest = cpu.guest
    print user
    return str(user)
