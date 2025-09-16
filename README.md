# SQL - 12

**PREVIOUSLY**
- Cyber security: XSS & Input Validation & Encoding

**TODAY**
- Cyber security: SQL Injections
- Cyber security general info
- 2FA/MFA


## Cyber security: SQL Injections
- SQL Injections is a classic example of a security vulnerability
- SQL Injections allow attackers to run arbitrary SQL code on your database

```sql
SELECT * FROM users WHERE username='' OR '1'='1';--' AND password='anything';
```
- 15 minute mini exercise
    - Figure out why this works, what is happening here
    - Write a simple language explanation of the technique
    - Prevent the attack


## Cyber security: OWASP Top 10

- Cyber security is the largest and most complex thing you can do in IT
- OWASP is one of the many, many places where you can learn security concepts

- Both XSS and SQL Injections are categorized as injection vulnerabilities
- An organization called OWASP publishes a top 10 security vulnerabilities list
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

- 10 minute mini exercise
    - It's OK not to grasp all the details straight away
    - Read https://owasp.org/Top10/A03_2021-Injection/

- There are cyber security specialists
    - But every IT professional should keep basic security concepts in mind
    - Security is a mindset, not only a job title

- A lot of security is about common sense
    - Be reasonably critical of everything you see
    - Don't click on links in emails from unknown senders
    - Don't share your password with anyone
    - Don't use the same password everywhere
        - Once one service is compromised, all your services are compromised
        - And many services absolutely will be compromised
        - It's a matter of when, not if

- A lot of security is about knowledge and research


## 2FA/MFA

- What is 2FA / MFA?

- 2FA stands for Two Factor Authentication
- MFA stands for Multi Factor Authentication

- You need more than one way to prove your identity
- The commonly a password and a code from your phone
- Even if someone owns your password, they can't log in
- A very simple and effective way to increase security

- To send verifications, we need to learn sending emails, SMS or notifications

- For all three, you could use a service like Twilio
    - https://www.twilio.com/en-us/ahoy

- Technically, you *could* send emails directly from your server
- But it's generally a good idea to use a service
- Making all of these essentially just an API call


## Wrap-up

- XSS and SQL injections are two common security vulnerabilities
- OWASP is an organization that publishes a top 10 security vulnerabilities list
- Security is a mindset, not only a job title
- 2FA/MFA is a simple and common way to increase security
- Sending notifications is a common task in web development

## Exercises

- https://classroom.github.com/a/S_fJNUDs

## Self-study prompts

- https://darknetdiaries.com/episode/33/ Fantastic security podcast episode
- https://www.youtube.com/watch?v=jmS_hZ-kfvs Cyber security career advice
- MDN also has a security section: https://developer.mozilla.org/en-US/docs/Web/Security
