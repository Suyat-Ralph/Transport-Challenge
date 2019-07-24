import dask.dataframe as dd
from glob import glob

def initial():
    """
    read in initial csv and begin cleaning process
    :return:
    """

    # dd.set_option('display.max_columns', None)
    df = dd.read_csv("Report.csv", assume_missing=True)
    print(df.tail())
    mean_visit = df["Visit Number"].mean(axis=0).compute()
    # print(df.compute())
    df = df[df["Page Name (c57) (prop57)"] != "jeep:us:"]
    df = df[df["Page URL No Query String (c28) (prop28)"] != "https://www.jeep.com/hostc/cpov/vehicleSearch.do"]
    df = df[df["Page URL No Query String (c28) (prop28)"] != "https://www.jeep.com/hostc/cpov/vehicleDetails.do"]
    df = df[df["Page Type (v25) (evar25)"] != "homepage"]
    # print(df.compute())
    df.groupby("Page Type (v25) (evar25)")
    print(df.compute())
    first = df[df["Visit Number"] <= mean_visit]
    second = df[df["Visit Number"] > mean_visit]



if __name__ == "__main__":
    initial()
