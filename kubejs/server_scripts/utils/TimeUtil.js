// priority: 10

/**
 * 格式化时间(内置hh:mm:ss)
 * @returns 返回字符串时间
 */
function time() {
    const now = new Date();

    // 获取小时、分钟和秒
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // 格式化时间输出，确保单数字前面有0
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    // 拼接时间字符串
    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    return timeString
}