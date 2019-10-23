module.exports = {
    calculate: function(income) {
        var tax;
        if (0 <= income <= 195850) {
            tax = income * (18 / 100).toFixed(2);
        } else if (195851 <= income <= 305850) {
            tax = (35253 + income * (26 / 100)).toFixed(2);
        } else if (305851 <= income <= 423300) {
            tax = (63853 + income * (31 / 100)).toFixed(2);
        } else if (423301 <= income <= 555600) {
            tax = (100263 + income * (36 / 100)).toFixed(2);
        } else if (555601 <= income <= 708310) {
            tax = (147891 + income * (39 / 100)).toFixed(2);
        } else if (708311 <= income <= 1500000) {
            tax = (207448 + income * (41 / 100)).toFixed(2);
        } else if (1500001 <= income) {
            tax = (532041 + income * (45 / 100)).toFixed(2);
        }

        return tax;
    }
};