### 설치

- [UEFI 듀얼부팅 바이오스 세팅법](https://jimnong.tistory.com/678)

- [UEFI 듀얼부팅 설치방법](https://jimnong.tistory.com/676)

- [Spring boot Multiple DataSource](https://www.tutorialspoint.com/spring_boot/spring_boot_database_handling.htm)

- [Mybatis와 JOOQ연동](https://zepinos.tistory.com/11)

- [Microsoft SQL Server 2017 on Debian](https://dev.to/nabbisen/microsoft-sql-server-2017-on-debian-n77)

- [Spring REST API 문서를 Swagger로 만들자](https://yookeun.github.io/java/2017/02/26/java-swagger/)

- [Send Push Notification](https://yoichiro.github.io/codelabs/actions-updates-and-notifications/?index=codelabs%2F#7)
- [actions-on-google dialogflow-updates-nodejs](https://github.com/actions-on-google/dialogflow-updates-nodejs)
- [Engage Users with your Action](https://codelabs.developers.google.com/codelabs/actions-user-engagement/#0)
- [google-home-push](https://github.com/taeukme/google-home-push)
- [데이터마이닝 기법을 이용한 인터넷 쇼핑몰 사이트의 CRM 사례분석](https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE01702214&mark=0&useDate=&bookmarkCnt=0&ipRange=N&language=ko_KR)
- [ZIGZAG데이터 분석 이야기_크로키닷컴](https://dataitgirls2.github.io/tutorial/Tutorial_180802_ZigZag.html)
- [쇼핑몰 운영방법 #01.데이터 분석 기법 (접속통계: cafe24)](https://m.blog.naver.com/PostView.nhn?blogId=web_sh&logNo=220397656453&proxyReferer=https:%2F%2Fwww.google.com%2F)
- [쇼핑몰이 고객을 분석한다](https://brunch.co.kr/@windydog/41)


### Map, Reduce, Filter of LINQ

- Map is Select
~~~
Enumerable.Range(1, 10).Select(x => x + 2);

//javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

~~~

- Reduce is Aggregate
~~~
Enumerable.Range(1, 10).Aggregate(0, (acc, x) => acc + x);

//javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10

~~~

- Filter is Where
~~~
Enumerable.Range(1, 10).Where(x => x % 2 == 0);

//javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

~~~

- [JavaScript Map, Reduce, and Filter - JS Array Functions Explained with Code Examples](https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/)

- DataSet의 DataTable에서 필요한 레코드만 따로 선택하는 구문이 두가지 Dt.Select(" ")와 Dt.Asenumerable().Where(" ")
위 두가지의 차이점과 성능은?

    - 차이점

    DataTable의 Select의 경우는 일반데이터에 대한 쿼리로 컴파일시에 문자열을 인식하여 동작함
    
    AsEnumerable메서드는 IEnumerable 인터페이스의 LINQ쿼리를 사용하여 동작
    
    LINQ는 데이터베이스로 쿼리를 보내지 않고 빠르게 동작하기 위한 Visual Studio의 기능

    - 결론

    데이터의 양이 적을 때는 속도의 차이를 못느끼지만 양이 많아지면 AsEnumerable 을 사용하는 것이 속도가 더 빠름 

- ![이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99D5D6405C43131006)

- [LINQ for JavaScript.](https://github.com/neuecc/linq.js)

- [Mattermost 설치](https://xdxo.tistory.com/1)

