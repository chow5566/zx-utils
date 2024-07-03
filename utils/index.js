/**
 * 计算校验码
 * @param idNumber
 * @returns {string}
 */
const calculateCheckCode = (idNumber) => {
    const coefficients = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 权重因子
    const checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']; // 校验码

    let sum = 0; // 累加权重乘积
    for (let i = 0; i < 17; i++) {
        sum += parseInt(idNumber[i], 10) * coefficients[i];
    }
    // 计算余数
    const remainder = sum % 11;
    return checkCodes[remainder];
}

/**
 * 生成随机的身份证号码
 * @param areaCode
 * @param birthYearStr
 * @param gender
 * @returns {string}
 */
export const generateRandomIdNumber = (areaCode, birthYearStr = '', gender = '') => {
    // 检查输入参数
    if (!areaCode) {
        throw new Error("areaCode is required");
    }

    // 生成随机的出生日期
    const birthYear = birthYearStr || String(Math.floor(Math.random() * 100) + 1900);
    const birthMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const birthDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'); // 简化处理，假设每月最多28天

    // 生成随机的顺序码
    // const sequenceCode = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
    // console.log(sequenceCode, 'sequenceCode')

    // 生成随机的顺序码
    // 根据性别生成顺序码的最后一位
    let sequenceCode;
    if (gender === 'male') {
        sequenceCode = String(Math.floor(Math.random() * 500) * 2 + 1).padStart(3, '0');
    } else if (gender === 'female') {
        sequenceCode = String(Math.floor(Math.random() * 500) * 2).padStart(3, '0');
    } else {
        sequenceCode = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
    }

    // 组合前17位身份证号码
    const idNumberPrefix = areaCode + birthYear + birthMonth + birthDay + sequenceCode;

    // 计算校验码
    const checkCode = calculateCheckCode(idNumberPrefix);

    // 返回完整的身份证号码
    return idNumberPrefix + checkCode;
}
