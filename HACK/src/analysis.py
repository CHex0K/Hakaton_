from catboost import CatBoostRegressor
from src.parameters import *

modelD = CatBoostRegressor()
modelD.load_model(WAY_TO_MODEL)

def get_predict(X):
    y=modelD.predict(X)
    print(y)
