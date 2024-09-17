function toggleGaleriOptions() {
  const galeriOptions = document.getElementById('galeri-options');
  const isVisible = galeriOptions.style.display === 'flex';
  galeriOptions.style.display = isVisible ? 'none' : 'flex';
}

function showGaleriContent(type) {
  const galeriContent = document.getElementById('galeri-content');
  let contentHTML = '';

  switch(type) {
    case 'foto':
      contentHTML = `
        <h3>Foto</h3>
        <div class="photo-grid">
          <img src="photo1.jpg" alt="Foto 1" class="photo-item">
  <img src="photo2.jpg" alt="Foto 2" class="photo-item">
  <img src="photo3.jpg" alt="Foto 3" class="photo-item">
  <img src="photo4.jpg" alt="Foto 4" class="photo-item">
  <img src="photo5.jpg" alt="Foto 5" class="photo-item">
  <img src="photo6.jpg" alt="Foto 6" class="photo-item">
  <img src="photo7.jpg" alt="Foto 7" class="photo-item">
  <img src="photo8.jpg" alt="Foto 8" class="photo-item">
  <img src="photo9.jpg" alt="Foto 9" class="photo-item">
  <img src="photo10.jpg" alt="Foto 10" class="photo-item">
  <img src="photo11.jpg" alt="Foto 11" class="photo-item">
  <img src="photo12.jpg" alt="Foto 12" class="photo-item">
  <img src="photo13.jpg" alt="Foto 13" class="photo-item">
  <img src="photo14.jpg" alt="Foto 14" class="photo-item">
  <img src="photo15.png" alt="Foto 15" class="photo-item">
  <img src="photo16.jpg" alt="Foto 16" class="photo-item">
          <!-- Tambahkan lebih banyak foto di sini -->
        </div>`;
      break;
    case 'video':
      contentHTML = `
        <h3>Video</h3>
        <div class="video-grid">
          <video controls class="video-item">
            <source src="gym-video1.mp4" type="video/mp4">
            Browser Anda tidak mendukung tag video.
          </video>
          <video controls class="video-item">
            <source src="gym-video2.mp4" type="video/mp4">
            Browser Anda tidak mendukung tag video.
          </video>
          <!-- Tambahkan lebih banyak video di sini -->
        </div>`;
      break;
    case 'disekolah':
      contentHTML = `
        <h3>Disekolah</h3>
        <div class="school-grid">
          <img src="School Photos1.jpg" alt="Sekolah 1" class="school-item">
  <img src="School Photos2.jpg" alt="Sekolah 2" class="school-item">
  <img src="School Photos3.jpg" alt="Sekolah 3" class="school-item">
  <img src="School Photos4.jpg" alt="Sekolah 4" class="school-item">
  <img src="School Photos5.jpg" alt="Sekolah 5" class="school-item">
  <img src="School Photos6.jpg" alt="Sekolah 6" class="school-item">
  <img src="School Photos7.jpg" alt="Sekolah 7" class="school-item">
  <img src="School Photos8.jpg" alt="Sekolah 8" class="school-item">
  <img src="School Photos9.jpg" alt="Sekolah 9" class="school-item">
  <img src="School Photos10.jpg" alt="Sekolah 10" class="school-item">
  <img src="School Photos11.jpg" alt="Sekolah 11" class="school-item">
  <img src="School Photos12.jpg" alt="Sekolah 12" class="school-item">
  <img src="School Photos13.jpg" alt="Sekolah 13" class="school-item">
  <img src="School Photos14.jpg" alt="Sekolah 14" class="school-item">
  <img src="School Photos15.jpg" alt="Sekolah 15" class="school-item">
  <img src="School Photos16.jpg" alt="Sekolah 16" class="school-item">
  <img src="School Photos17.jpg" alt="Sekolah 17" class="school-item">
  <img src="School Photos18.jpg" alt="Sekolah 18" class="school-item">
  <img src="School Photos19.jpg" alt="Sekolah 19" class="school-item">
  <img src="School Photos20.jpg" alt="Sekolah 20" class="school-item">
  <img src="School Photos21.jpg" alt="Sekolah 21" class="school-item">
  <img src="School Photos22.jpg" alt="Sekolah 22" class="school-item">
  <img src="School Photos23.jpg" alt="Sekolah 23" class="school-item">
  <img src="School Photos24.jpg" alt="Sekolah 24" class="school-item">
  <img src="School Photos25.jpg" alt="Sekolah 25" class="school-item">
  <img src="School Photos26.jpg" alt="Sekolah 26" class="school-item">
  <img src="School Photos27.jpg" alt="Sekolah 27" class="school-item">
  <img src="School Photos28.jpg" alt="Sekolah 28" class="school-item">
  <img src="School Photos29.jpg" alt="Sekolah 29" class="school-item">
  <img src="School Photos30.jpg" alt="Sekolah 30" class="school-item">
  <img src="School Photos31.jpg" alt="Sekolah 31" class="school-item">
  <img src="School Photos32.jpg" alt="Sekolah 32" class="school-item">
  <img src="School Photos33.jpg" alt="Sekolah 33" class="school-item">
  <img src="School Photos34.jpg" alt="Sekolah 34" class="school-item">
  <img src="School Photos35.jpg" alt="Sekolah 35" class="school-item">
  <img src="School Photos36.jpg" alt="Sekolah 36" class="school-item">
  <img src="School Photos37.jpg" alt="Sekolah 37" class="school-item">
  <img src="School Photos38.jpg" alt="Sekolah 38" class="school-item">
  <img src="School Photos39.jpg" alt="Sekolah 39" class="school-item">
  <img src="School Photos40.jpg" alt="Sekolah 40" class="school-item">
  <img src="School Photos41.jpg" alt="Sekolah 41" class="school-item">
  <img src="School Photos42.jpg" alt="Sekolah 42" class="school-item">
  <img src="School Photos43.jpg" alt="Sekolah 43" class="school-item">
  <img src="School Photos44.jpg" alt="Sekolah 44" class="school-item">
  <img src="School Photos45.jpg" alt="Sekolah 45" class="school-item">
  <img src="School Photos46.jpg" alt="Sekolah 46" class="school-item">
  <img src="School Photos47.jpg" alt="Sekolah 47" class="school-item">
  <img src="School Photos48.jpg" alt="Sekolah 48" class="school-item">
  <img src="School Photos49.jpg" alt="Sekolah 49" class="school-item">
  <img src="School Photos50.jpg" alt="Sekolah 50" class="school-item">
  <img src="School Photos51.jpg" alt="Sekolah 51" class="school-item">
  <img src="School Photos52.jpg" alt="Sekolah 52" class="school-item">
  <img src="School Photos53.jpg" alt="Sekolah 53" class="school-item">
  <img src="School Photos54.jpg" alt="Sekolah 54" class="school-item">
  <img src="School Photos55.jpg" alt="Sekolah 55" class="school-item">
  <img src="School Photos56.jpg" alt="Sekolah 56" class="school-item">
  <img src="School Photos57.jpg" alt="Sekolah 57" class="school-item">
  <img src="School Photos58.jpg" alt="Sekolah 58" class="school-item">
  <img src="School Photos59.jpg" alt="Sekolah 59" class="school-item">
  <img src="School Photos60.jpg" alt="Sekolah 59" class="school-item">
          <!-- Tambahkan lebih banyak foto disekolah di sini -->
          <video controls class="gym-item">
        <source src="sekolah-video1.mp4" type="video/mp4">
        Browser Anda tidak mendukung tag video.
      </video>
        </div>`;
      break;
    case 'digym':
  contentHTML = `
    <h3>Digym</h3>
    <div class="gym-grid">
      <img src="gym1.jpg" alt="Gym 1" class="gym-item">
      <img src="gym2.jpg" alt="Gym 2" class="gym-item">
      <!-- Tambahkan lebih banyak foto digym di sini -->
      <video controls class="gym-item">
        <source src="gym-video2.mp4" type="video/mp4">
        Browser Anda tidak mendukung tag video.
      </video>
    </div>`;
  break;
    case 'musik':
      contentHTML = `
        <h3>Musik Favorit</h3>
        <div class="music-grid">
          <div class="music-item">
            <img src="music1.jpg" alt="Musik 1">
            <p>Judul Lagu 1</p>
          </div>
          <div class="music-item">
            <img src="music2.jpg" alt="Musik 2">
            <p>Judul Lagu 2</p>
          </div>
          <!-- Tambahkan lebih banyak musik di sini -->
        </div>`;
      break;
    case 'youtube':
      contentHTML = `
        <h3>Channel YouTube Yang Aku Tonton</h3>
        <div class="youtube-grid">
          <div class="youtube-item">
            <img src="channel1.jpg" alt="Channel 1">
            <p>Deskripsi Channel 1</p>
          </div>
          <div class="youtube-item">
            <img src="channel2.jpg" alt="Channel 2">
            <p>Deskripsi Channel 2</p>
          </div>
          <!-- Tambahkan lebih banyak channel YouTube di sini -->
        </div>`;
      break;
    default:
      contentHTML = '<p>Pilih opsi galeri yang tersedia.</p>';
  }

  galeriContent.innerHTML = contentHTML;
  galeriContent.classList.add('active');
}
