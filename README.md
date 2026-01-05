# Microservice TST 18223080 18223094

Repositori ini berisi dua microservice, pertama adalah microservice Job Listing yang menyediakan informasi lowongan pekerjaan, kedua adalah microservice Rental Price yang memberikan informasi harga rental properti.

Data yang dikeluarkan dari microservice Job Listing berupa title pekerjaan, nama perusahaan yang memberikan pekerjaan, lokasi dari pekerjaan dan skill yang dibutuhkan. Sementara, informasi dari microservice Rental Price berisi harga properti yang dapat disewa beserta dengan lokasi kota dan Statenya.

## Panduan Akses
Anda bisa mengakses kedua microservice ini secara live maupun menjalankannya sendiri di komputer anda.

### Akses Live
**Pastikan anda mengakses link-link ini melalui HTTP dan bukan HTTPS** <br>
Bisa melalui: <br>
Link API STB-deployed Job Listing (Rafi): http://rafi.tugastst.my.id <br>
Link API STB-deployed Rent Listing (Michael Ballard): http://ballard.tugastst.my.id <br>
Link API JSON Mentah Job Listing (Rafi): http://rafi.tugastst.my.id/api/jobs <br>
Link API JSON Mentah Rent Listing (Michael Ballard): http://ballard.tugastst.my.id/api/rents <br>

### Akses Lokal
1. Lakukan "git clone" terhadap repositori ini di terminal anda. <br>
2. Lakukan command cd untuk pindah directory ke folder baru yang telah tercipta <br>
3. Masuk ke folder BallardRent <br>
4. Lakukan command "npm i" <br>
5. Lakukan command "node Server.js" <br>
6. Buat Instance terminal yang baru <br>
7. Masuk ke folder RafiJob <br>
8. Lakukan command "npm i" <br>
9. Lakukan command "node Server.js" <br>
10. Buka localhost:8880 dan localhost:8881 di perangkat anda. <br>

## Teknologi yang digunakan
### Backend
- Runtime: NodeJS <br>
- Framework: ExpressJS
- Middleware: CORS (supaya bisa ada cross-origin request antara microservice Job Listing dan Rent Listing) <br>
### Frontend
- Pure HTML5, CSS3, dan Vanilla Javascript <br>
### Data
- Format: JSON <br>
### Infrastruktur
- Containerization: Docker, untuk meng-kontainerisasi aplikasi memakai image node:18-alpine <br>
- Orchestration: Docker Compose, mendefinisikan dan menjalankan microservicenya di port 8880 dan 8881 <br>

## Anggota dan Kontribusi
**18223080 - Michael Ballard Isaiah Silaen - Rent Listing Microservice** <br>
**18223094 - Muhammad Rafi Ramadhan - Job Listing Microservice** <br>
