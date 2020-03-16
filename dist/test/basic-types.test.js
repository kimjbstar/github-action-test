describe("Basic Types", () => {
    test("Enum#number", () => {
        let Color;
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Blue"] = 2] = "Blue";
        })(Color || (Color = {}));
        let c = Color.Green;
        expect(c).toBe(1);
    });
    test("Enum#name", () => {
        let Color;
        (function (Color) {
            Color[Color["Red"] = 1] = "Red";
            Color[Color["Green"] = 2] = "Green";
            Color[Color["Blue"] = 3] = "Blue";
        })(Color || (Color = {}));
        let colorName = Color[2];
        expect(colorName).toBe("Green");
    });
});
//# sourceMappingURL=basic-types.test.js.map