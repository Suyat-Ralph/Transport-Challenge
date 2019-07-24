import dask.dataframe as dd
import matplotlib.pyplot as plt


def initial():
    """
    read in initial csv and begin cleaning process
    :return:
    """

    # dd.set_option('display.max_columns', None)
    df = dd.read_csv("Report.csv", assume_missing=True)
    mean_visit = df["Visit Number"].mean(axis=0).compute()
    # print(df.compute())
    df = df[df["Page Name"] != "jeep:us:"]
    df = df[df["Page URL No Query String"] != "https://www.jeep.com/hostc/cpov/vehicleSearch.do"]
    df = df[df["Page URL No Query String"] != "https://www.jeep.com/hostc/cpov/vehicleDetails.do"]
    df = df[df["Page Type"] != "homepage"]
    # print(df.compute())

    #print(df.compute())
    df = df.groupby("Vehicle Model Name/Trim")["Configuration Complete"].sum().compute().nlargest(20)
    plt.style.use('dark_background')
    plt.xticks(fontsize = 5, rotation=90)
    plt.plot(df)
    plt.show()


    # print(df.compute())
    print(df.groupby("Vehicle Model Name/Trim")["Page Views"].sum().compute().nlargest(20))
    # print(df.compute())

    first = df[df["Visit Number"] <= mean_visit]
    second = df[df["Visit Number"] > mean_visit]


if __name__ == "__main__":
    initial()
