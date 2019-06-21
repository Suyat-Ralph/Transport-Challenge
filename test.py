import urllib
from bs4 import BeautifulSoup
from requests import get
from requests.exceptions import RequestException
from contextlib import closing
import csv
import numpy as np
import pandas as pd


def process_csv():
    """
    takes a csv file and processes it and returns it in a table format
    :return:
    """

    # of format ("_____.csv", delimiter = "," , (["","",""] (Optional) -> names of columns ), )
    article_read = pd.read_csv()
    article_read[["", ""]] #indicate the name of the columns you want
    #article_read.(column name) == "" #will return True or False or some shit





def func() -> str:
    """

    :param link:
    :return:
    """

    raw_html = simple_get('http://www.fabpedigree.com/james/mathmen.htm')
    html = BeautifulSoup(raw_html, 'html.parser')
    for i, li in enumerate(html.select('a')):
        print(i, li.text)


def simple_get(url):
    """
    Attempts to get the content at `url` by making an HTTP GET request.
    If the content-type of response is some kind of HTML/XML, return the
    text content, otherwise return None.
    """
    try:
        with closing(get(url, stream=True)) as resp:
            if is_good_response(resp):
                return resp.content
            else:
                return None

    except RequestException as e:
        log_error('Error during requests to {0} : {1}'.format(url, str(e)))
        return None

def is_good_response(resp):
    """
    Returns True if the response seems to be HTML, False otherwise.
    """
    content_type = resp.headers['Content-Type'].lower()
    return (resp.status_code == 200
            and content_type is not None
            and content_type.find('html') > -1)


def log_error(e):
    """
    It is always a good idea to log errors.
    This function just prints them, but you can
    make it do anything.
    """
    print(e)