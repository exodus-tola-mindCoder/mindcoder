import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    });
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,// 1 week in milliseconds
        sameSite: "strict",
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
    });

    return token;
};
