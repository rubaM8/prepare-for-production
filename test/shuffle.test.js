import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";
import { cardSets } from "../data/data.js";

describe("shuffle function", () => {
    it("it returns an array of the same size as the original", () => {
        const arr = cardSets[0]["cards"];
        const result = shuffle(arr);
        expect(result.length).to.equal(arr.length);
    });

    it("it includes the same elements as the original", () => {
        const arr = cardSets[2]["cards"];
        const result = shuffle(arr);
        expect(result).to.deep.include.all.members(arr);
    });

    it("it randomely shuffles the elements", () => {
        const arr = [1, 2, 3];
        const results = new Set();

        for (let i = 0; i < 100; i++) {
            const str = shuffle(arr).join("");
            results.add(str);
        }
        expect(results).to.have.lengthOf.at.least(2);
    });

    it("it returns the input array if the input contains one element", () => {
        const oneArr = [1];
        const res = shuffle(oneArr);
        expect(res).to.deep.equal(res);
    });

    it("it returns the input array if the input is empty", () => {
        const emptyArr = [];
        const res = shuffle(emptyArr);
        expect(res).to.equal(res);
    });
});
