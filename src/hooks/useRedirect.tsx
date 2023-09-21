import { useEffect } from 'react';

export default function useRedirect() {
  useEffect(() => {
    // 현재 URL 가져오기
    var currentURL = window.location.href;

    // URL에서 searchWord를 search_query로 변경
    var newURL = currentURL.replace(/searchWord=/, 'search_query=');

    // 변경된 URL로 이동
    if(currentURL.includes('searchWord')){window.location.href = newURL;}
}, []);
}

