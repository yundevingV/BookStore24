export default function convertTime(time: any) {
    const inputDateTime = new Date(time);
    
    // 월(Month)은 0부터 시작하므로 1을 더합니다.
    const year = inputDateTime.getFullYear();
    const month = inputDateTime.getMonth() + 1;
    const day = inputDateTime.getDate();
    const hours = inputDateTime.getHours();
    const minutes = inputDateTime.getMinutes();

    // 각 부분을 원하는 형식으로 조합합니다.
    const formattedDateTime = `${year}. ${month}. ${day} ${hours}:${minutes}`;

    return formattedDateTime;
}
