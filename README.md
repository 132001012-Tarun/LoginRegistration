This project consists of a frontend developed in React.js and a backend developed in Spring Boot. The application includes UI validation for required fields, unit test cases, and saves user credentials to a database(mysql)


git clone https://github.com/your-repository.git
cd your-repository


cd registration_login     (all frontend logic)

npm install
npm start



cd registration-login-springboot-new
./mvnw clean install
./mvnw spring-boot:run



Running the Application
Ensure the backend is running on http://localhost:8080.
Open a new terminal and ensure the frontend is running on http://localhost:3000.
Access the application by navigating to http://localhost:3000 in your web browser.




Frontend testing:
cd registration_login
npm test


Backend testing
cd registration-login-springboot-new
./mvnw test



Database Configuration

spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=Tarun#4060
spring.jpa.database-platform=org.hibernate.dialect.MySQL5Dialect





