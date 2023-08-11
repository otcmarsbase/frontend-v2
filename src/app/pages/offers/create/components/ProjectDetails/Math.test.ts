import {getRecountedValue} from "../../utils";
import Decimal from "decimal.js";
import {EPricingModel} from "../../../create/types";

describe('Test Step 3 recount values', () => {
    test('Recounting Target FDV value in Stablecoin price model', () => {
        const expectedResult = {
            _bindedID: 'pricePerEquity',
            _result: Number(1),
            _currentID: 'targetFDV'
        }
        expect(
            getRecountedValue({
                denomByPricingModel: new Decimal(5000000),
                contractValue: new Decimal(1000000),
                targetFDV: new Decimal(1000000000),
                roundFDV: new Decimal(100000000),
                _value: new Decimal(1000000000),
                denomByLotType: new Decimal(10000000),
                pricingModel: EPricingModel.IN_STABLECOIN,
                currentID: 'targetFDV',
                bindedID: "pricePerEquity"
            })
        ).toEqual(expectedResult)
    })
    test('Recounting Target FDV value in Unit price model', () => {
        const expectedResult = {
            _bindedID: 'pricePerEquity',
            _result: Number(1),
            _currentID: 'targetFDV'
        }
        expect(
            getRecountedValue({
                denomByPricingModel: new Decimal(5000000),
                contractValue: new Decimal(1000000),
                targetFDV: new Decimal(1000000000),
                roundFDV: new Decimal(100000000),
                _value: new Decimal(1000000000),
                denomByLotType: new Decimal(10000000),
                pricingModel: EPricingModel.IN_EQUITY,
                currentID: 'targetFDV',
                bindedID: "pricePerEquity"
            })
        ).toEqual(expectedResult)
    })
    test('Recounting Price Per Equity value in Stablecoin price model', () => {
        const expectedResult = {
            _bindedID: 'targetFDV',
            _result: Number(1000000000),
            _currentID: 'pricePerEquity'
        }
        expect(
            getRecountedValue({
                denomByPricingModel: new Decimal(5000000),
                contractValue: new Decimal(1000000),
                targetFDV: new Decimal(0),
                roundFDV: new Decimal(100000000),
                _value: new Decimal(1),
                denomByLotType: new Decimal(10000000),
                pricingModel: EPricingModel.IN_STABLECOIN,
                currentID: 'pricePerEquity',
                bindedID: "targetFDV"
            })
        ).toEqual(expectedResult)
    })
    test('Recounting Target Token Price value in Equity price model', () => {
        const expectedResult = {
            _bindedID: 'targetFDV',
            _result: Number(1000000000),
            _currentID: 'targetTokenPrice'
        }
        expect(
            getRecountedValue({
                denomByPricingModel: new Decimal(5000000),
                contractValue: new Decimal(1000000),
                targetFDV: new Decimal(0),
                roundFDV: new Decimal(100000000),
                _value: new Decimal(1),
                denomByLotType: new Decimal(10000000),
                pricingModel: EPricingModel.IN_EQUITY,
                currentID: 'targetTokenPrice',
                bindedID: "targetFDV"
            })
        ).toEqual(expectedResult)
    })
})


