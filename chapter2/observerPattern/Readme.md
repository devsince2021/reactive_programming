## Observer Pattern

- polling 하는 것을 push 로 바꾸는 것이 핵심
- Observer가 Observe하는 대상이 Subject 혹은 Observable
- Subject는 Observer 관련 메소드를 외부에 노출할 필요는 없을 듯
- 이번에 구현할 때 Subject 내부에서 IObserver 인터페이스와 Applicant 구현타입을 나눠서 쓰는 것에 어려움이 있었음.
