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

    return df


def get_best_selling(df):
    """
    :return: the best selling car
    """

    # print(df.compute())
    df = df.groupby("Vehicle Model Name/Trim")["Configuration Complete"].sum().compute().nlargest(20)
    # plt.style.use('dark_background')
    # plt.xticks(fontsize = 5, rotation=90)
    # plt.plot(df)
    # plt.show()

    return df.index[0]


def get_most_popular(df):
    """
    :return: the most popular car
    """
    df = df.groupby("Vehicle Model Name/Trim")["Page Views"].sum().compute().nlargest(20)

    return df.index[0]


# if __name__ == "__main__":
#     get_best_selling(initial())
#     get_most_popular(initial())
