# Pracownia_Problemowa
HOW TO START:
1. npm i w obu katalogach
2. Dodać config.env w server/config z polami: 

NODE_ENV=development

PORT=5000

MONGO_URI = url z mongo cloud'a

JWT_SECRET= co chcecie

JWT_EXPIRE=30d

CATERING_MAIL = mail z którego chcemy wysyłać

CATERING_MAIL_PASSWORD = hasło

3. Startowanie jednocześnie backendu i frontendu - npm run dev z poziomu katalogu server

DOKUMENTACJA API DOSTĘPNA PO URUCHOMIENIU SERWERA POD ADRESEM: http://localhost:5000/api-docs
 
WYMAGANIA APKi: 
1. Logowanie i rejestracja:
- admin jest wbudowany
- admin tworzy profile przedszkoli podając: nazwę, maila, okres zamówień; tworzy się również kod placówki
- przedszkole tworzy listę dzieci podając: imię i nazwisko; tworzy się kod dziecka
- rodzic rejestruje się podając: email, hasło, imię, nazwisko i kod placówki
- rodzic dodaje dzieci poprzez kod dziecka
- rodzic powinien posiadać swój protfel na profilu, stan początkowy 0zł
- logowanie za pomocą e-maila i hasła
- autoryzacja za pomocą cookies'ów
2. Jadłospis
- admin dodaje kolejne posiłki podając: typ posiłku, opis (co danie zawiera), date kiedy będzie podawane
3. Zamówienia
- rodzic/przedszkole tworzą zamówienie podając: konkretne typy posiłków na konkretnie dni (np. poniedziałek - śniadania, obiady; wtorek - obiady, kolacje itd), uwagi, czy w święta również będą jedzone posiłki. Backend musi zapisać oddzielnie każdy posiłęk z konkretną datą.
- zamówienie musi zawierac status 'czy zapłacono', edytowalny przez pracownika przedszkola. 
- rodzic usuwając dany posiłek otrzymuje należność do swojego portfela, jeśli status posiłku był 'zapłacony'
- backend musi zrobić endpoint zwracający wszystki dni wolne w roku
