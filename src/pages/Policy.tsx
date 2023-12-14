import React from 'react';
import styled from 'styled-components';

const PolicyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  text-align: left;
`;

const PolicyContent = styled.div`
  max-width: 600px;
`;

export default function Policy() {
  return (
    <PolicyContainer>
      <PolicyContent>
        <>
          <h1>개인정보 처리방침
</h1>
          <p>
            <strong>1. 개인정보의 처리 목적
</strong>
          </p>
          <p>
          ① {`<BookStore24>`}
          은(는) 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.

          </p>
          <ul>
            <li>고객 가입의사 확인</li>
            <li>고객에 대한 서비스 제공에 따른 본인 식별·인증</li>
            <li>회원자격 유지·관리</li>
            <li>물품 또는 서비스 공급에 따른 금액 결제</li>
            <li>물품 또는 서비스의 공급·배송</li>
            <li>마케팅 및 광고에의 활용</li>
          </ul>
          <p>
            <strong>2. 개인정보의 처리 및 보유 기간 작성</strong>
          </p>
          <p>
            ① {`<BookStore24>`} 은(는) 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유·이용기간 또는 법령에 따른 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
          </p>
          <p>
            ② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.

          </p>
          <p>고객 가입 및 관리 : 서비스 이용계약 또는 회원가입 해지시까지, 다만 채권·채무관계 잔존시에는 해당 채권·채무관계 정산시까지</p>
          <p>
            <strong>3. 정보주체와 법정대리인의 권리·의무 및 그 행사방법
</strong>
          </p>
          <p>개인정보 처리업무: 홈페이지 회원가입 및 관리, 민원사무 처리, 재화 또는 서비스 제공, 마케팅 및 광고에의 활용</p>
          <p>
            <strong>필수 항목 : </strong>로그인ID, 비밀번호, 이메일, 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 결제기록
          </p>
          <p><strong>선택 항목 : </strong> 성별, 이름</p>
        </>
      </PolicyContent>
    </PolicyContainer>
  );
}