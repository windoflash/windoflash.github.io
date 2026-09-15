:root {
  --bg: #030806;
  --bg-soft: #06110b;

  --surface: rgba(13, 27, 19, 0.78);
  --surface-solid: #0d1a13;

  --green: #39d98a;
  --green-bright: #62e7a4;
  --green-dark: #1e9b60;

  --white: #f4fff8;
  --text: #d8e5de;
  --muted: #8fa79a;

  --border: rgba(57, 217, 138, 0.17);
  --border-strong: rgba(57, 217, 138, 0.32);

  --shadow:
    0 25px 80px rgba(0, 0, 0, 0.48);

  --radius: 26px;
}


* {
  box-sizing: border-box;
}


html {
  scroll-behavior: smooth;
}


body {
  margin: 0;

  min-height: 100vh;

  overflow-x: hidden;

  color: var(--white);

  background:
    radial-gradient(
      circle at 50% -10%,
      rgba(57, 217, 138, 0.11),
      transparent 35%
    ),
    radial-gradient(
      circle at 0% 50%,
      rgba(30, 155, 96, 0.06),
      transparent 35%
    ),
    var(--bg);

  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    sans-serif;
}


a {
  color: inherit;

  text-decoration: none;
}


button,
a {
  -webkit-tap-highlight-color: transparent;
}


/* ==========================================
   NETWORK CANVAS
========================================== */

#networkCanvas {
  position: fixed;

  inset: 0;

  width: 100%;
  height: 100%;

  pointer-events: none;

  z-index: 0;

  opacity: 0.82;
}


/* ==========================================
   BACKGROUND GLOW
========================================== */

.background-glow {
  position: fixed;

  width: 420px;
  height: 420px;

  border-radius: 50%;

  filter: blur(90px);

  pointer-events: none;

  z-index: 0;

  opacity: 0.10;

  animation:
    glowFloat 12s ease-in-out infinite;
}


.glow-one {
  top: -100px;
  left: -100px;

  background: var(--green);
}


.glow-two {
  right: -130px;
  top: 35%;

  background: #147d4e;

  animation-delay: -4s;
}


.glow-three {
  bottom: -180px;
  left: 35%;

  background: var(--green-dark);

  animation-delay: -7s;
}


@keyframes glowFloat {

  0%,
  100% {
    transform:
      translate3d(0, 0, 0)
      scale(1);
  }

  50% {
    transform:
      translate3d(20px, -30px, 0)
      scale(1.08);
  }
}


/* ==========================================
   HEADER
========================================== */

.site-header {
  position: sticky;

  top: 0;

  z-index: 20;

  backdrop-filter: blur(22px);

  background:
    rgba(3, 8, 6, 0.67);

  border-bottom:
    1px solid rgba(57, 217, 138, 0.08);
}


.header-inner {
  width: min(1180px, calc(100% - 36px));

  min-height: 74px;

  margin: auto;

  display: flex;

  align-items: center;

  justify-content: space-between;
}


.brand {
  display: flex;

  align-items: center;

  gap: 12px;

  font-weight: 800;

  letter-spacing: 0.08em;
}


.brand-mark {
  width: 38px;
  height: 38px;

  display: grid;

  place-items: center;

  border-radius: 12px;

  color: #031009;

  background:
    linear-gradient(
      135deg,
      var(--green-bright),
      var(--green)
    );

  box-shadow:
    0 0 30px rgba(57, 217, 138, 0.22);

  font-size: 12px;
}


.brand-name {
  color: var(--white);

  font-size: 14px;
}


.navigation {
  display: flex;

  align-items: center;

  gap: 28px;
}


.navigation a {
  color: var(--muted);

  font-size: 14px;

  transition:
    color 0.25s ease,
    transform 0.25s ease;
}


.navigation a:hover {
  color: var(--green-bright);

  transform: translateY(-2px);
}


/* ==========================================
   CONTAINER
========================================== */

.container {
  position: relative;

  z-index: 2;

  width: min(1180px, calc(100% - 36px));

  margin: auto;
}


/* ==========================================
   HERO
========================================== */

.hero-section {
  min-height: 760px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;

  padding:
    100px 0
    90px;
}


.hero-badge {
  display: inline-flex;

  align-items: center;

  gap: 9px;

  padding: 9px 15px;

  border:
    1px solid var(--border-strong);

  border-radius: 999px;

  background:
    rgba(57, 217, 138, 0.05);

  color: var(--muted);

  font-size: 13px;

  backdrop-filter: blur(12px);

  animation:
    fadeUp 0.8s ease both;
}


.status-dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: var(--green);

  box-shadow:
    0 0 15px var(--green);

  animation:
    pulseDot 1.8s infinite;
}


@keyframes pulseDot {

  0%,
  100% {
    transform: scale(1);

    opacity: 1;
  }

  50% {
    transform: scale(1.35);

    opacity: 0.65;
  }
}


.hero-section h1 {
  max-width: 950px;

  margin: 28px 0 0;

  font-size:
    clamp(55px, 9vw, 112px);

  line-height: 0.98;

  letter-spacing: -0.06em;

  animation:
    fadeUp 0.8s 0.1s ease both;
}


.gradient-text {
  color: transparent;

  background:
    linear-gradient(
      135deg,
      #ffffff 10%,
      var(--green-bright) 55%,
      var(--green-dark) 100%
    );

  -webkit-background-clip: text;
  background-clip: text;
}


.hero-description {
  max-width: 720px;

  margin: 30px auto 0;

  color: var(--muted);

  font-size: 18px;

  line-height: 1.8;

  animation:
    fadeUp 0.8s 0.18s ease both;
}


.hero-actions {
  display: flex;

  gap: 13px;

  margin-top: 34px;

  animation:
    fadeUp 0.8s 0.25s ease both;
}


.primary-button,
.secondary-button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  min-height: 52px;

  padding:
    0 22px;

  border-radius: 15px;

  font-weight: 700;

  font-size: 14px;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}


.primary-button {
  color: #031009;

  background:
    linear-gradient(
      135deg,
      var(--green-bright),
      var(--green)
    );

  box-shadow:
    0 12px 40px rgba(57, 217, 138, 0.14);
}


.primary-button:hover {
  transform: translateY(-3px);

  box-shadow:
    0 18px 50px rgba(57, 217, 138, 0.24);
}


.secondary-button {
  border:
    1px solid var(--border-strong);

  background:
    rgba(255, 255, 255, 0.02);

  color: var(--white);

  backdrop-filter: blur(14px);
}


.secondary-button:hover {
  transform: translateY(-3px);

  border-color:
    rgba(57, 217, 138, 0.55);

  background:
    rgba(57, 217, 138, 0.05);
}


.hero-stats {
  display: flex;

  gap: 55px;

  margin-top: 70px;

  animation:
    fadeUp 0.8s 0.35s ease both;
}


.stat {
  display: flex;

  flex-direction: column;

  gap: 5px;
}


.stat strong {
  font-size: 20px;

  color: var(--green-bright);
}


.stat span {
  color: var(--muted);

  font-size: 12px;

  text-transform: uppercase;

  letter-spacing: 0.14em;
}


/* ==========================================
   SECTIONS
========================================== */

.section {
  padding: 95px 0;
}


.section-heading {
  display: flex;

  justify-content: space-between;

  align-items: end;

  gap: 50px;

  margin-bottom: 42px;
}


.section-heading.single {
  display: block;
}


.section-label {
  color: var(--green);

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 0.22em;
}


.section-heading h2,
.detail-section h2,
.contact-section h2 {
  margin: 12px 0 0;

  font-size:
    clamp(36px, 6vw, 66px);

  line-height: 1.05;

  letter-spacing: -0.045em;
}


.section-heading > p {
  max-width: 390px;

  margin: 0;

  color: var(--muted);

  line-height: 1.8;
}


/* ==========================================
   APP GRID
========================================== */

.apps-grid {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 26px;
}


/* ==========================================
   APP CARD
========================================== */

.app-card {
  position: relative;

  overflow: hidden;

  min-height: 690px;

  border-radius: var(--radius);

  border:
    1px solid var(--border);

  background:
    linear-gradient(
      180deg,
      rgba(16, 32, 23, 0.88),
      rgba(7, 15, 11, 0.93)
    );

  box-shadow:
    var(--shadow);

  transform-style: preserve-3d;

  transition:
    border-color 0.4s ease,
    box-shadow 0.4s ease,
    transform 0.12s ease;
}


.app-card:hover {
  border-color:
    rgba(57, 217, 138, 0.38);

  box-shadow:
    0 35px 100px rgba(0, 0, 0, 0.58),
    0 0 60px rgba(57, 217, 138, 0.07);
}


.card-glow {
  position: absolute;

  top: -100px;
  left: 50%;

  width: 300px;
  height: 300px;

  transform:
    translateX(-50%);

  border-radius: 50%;

  background:
    rgba(57, 217, 138, 0.11);

  filter:
    blur(75px);

  opacity: 0.45;

  pointer-events: none;
}


.card-top-line {
  position: absolute;

  left: 20px;
  right: 20px;
  top: 0;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(98, 231, 164, 0.75),
      transparent
    );
}


/* ==========================================
   APP PREVIEW
========================================== */

.app-preview {
  position: relative;

  height: 305px;

  margin: 20px;

  overflow: hidden;

  border-radius: 20px;

  display: flex;

  align-items: center;

  justify-content: center;

  background:
    radial-gradient(
      circle at center,
      rgba(57, 217, 138, 0.14),
      transparent 48%
    ),
    #07110b;

  border:
    1px solid rgba(57, 217, 138, 0.10);

  transform:
    translateZ(35px);

  box-shadow:
    inset 0 0 80px rgba(0, 0, 0, 0.42);
}


.app-preview::before {
  content: "";

  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      130deg,
      transparent 0%,
      rgba(255, 255, 255, 0.035) 45%,
      transparent 65%
    );

  transform:
    translateX(-120%);

  animation:
    shine 5s linear infinite;

  pointer-events: none;
}


@keyframes shine {
  to {
    transform:
      translateX(120%);
  }
}


.app-preview img {
  position: relative;

  width: 190px;
  height: 190px;

  object-fit: cover;

  border-radius: 42px;

  box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.5),
    0 0 45px rgba(57, 217, 138, 0.12);

  animation:
    appFloat 5s ease-in-out infinite;

  z-index: 2;
}


@keyframes appFloat {

  0%,
  100% {
    transform:
      translateY(0)
      rotateY(-4deg)
      rotateX(2deg);
  }

  50% {
    transform:
      translateY(-11px)
      rotateY(4deg)
      rotateX(-2deg);
  }
}


.preview-glow {
  position: absolute;

  width: 220px;
  height: 220px;

  border-radius: 50%;

  background:
    rgba(57, 217, 138, 0.13);

  filter:
    blur(65px);

  animation:
    previewPulse 4s ease-in-out infinite;
}


@keyframes previewPulse {

  0%,
  100% {
    opacity: 0.5;

    transform: scale(0.94);
  }

  50% {
    opacity: 0.9;

    transform: scale(1.08);
  }
}


/* ==========================================
   TEA CARD
========================================== */

.tea-preview {
  background:
    radial-gradient(
      circle at center,
      rgba(202, 152, 68, 0.14),
      transparent 45%
    ),
    #0b0e0c;
}


.preview-orb {
  position: absolute;

  width: 250px;
  height: 250px;

  border-radius: 50%;

  border:
    1px solid rgba(245, 196, 81, 0.16);

  box-shadow:
    0 0 70px rgba(245, 196, 81, 0.08),
    inset 0 0 60px rgba(245, 196, 81, 0.05);

  animation:
    orbRotate 12s linear infinite;
}


.preview-orb::before,
.preview-orb::after {
  content: "";

  position: absolute;

  border-radius: 50%;

  border:
    1px solid rgba(245, 196, 81, 0.12);
}


.preview-orb::before {
  inset: 22px;
}


.preview-orb::after {
  inset: 48px;
}


@keyframes orbRotate {
  to {
    transform: rotate(360deg);
  }
}


.tea-cup {
  position: relative;

  z-index: 2;

  display: flex;

  align-items: center;

  justify-content: center;
}


.cup-body {
  width: 145px;
  height: 145px;

  display: grid;

  place-items: center;

  border-radius: 42px;

  font-size: 72px;

  background:
    linear-gradient(
      145deg,
      rgba(245, 196, 81, 0.16),
      rgba(245, 196, 81, 0.04)
    );

  border:
    1px solid rgba(245, 196, 81, 0.22);

  box-shadow:
    0 35px 80px rgba(0, 0, 0, 0.5),
    0 0 55px rgba(245, 196, 81, 0.08);

  animation:
    teaFloat 4s ease-in-out infinite;
}


@keyframes teaFloat {

  0%,
  100% {
    transform:
      translateY(0)
      rotate(-2deg);
  }

  50% {
    transform:
      translateY(-12px)
      rotate(2deg);
  }
}


.tea-steam {
  position: absolute;

  width: 13px;

  height: 58px;

  border-radius: 999px;

  background:
    linear-gradient(
      180deg,
      rgba(255,255,255,0),
      rgba(255,255,255,0.18)
    );

  filter:
    blur(4px);

  opacity: 0;

  animation:
    steam 3.5s ease-in-out infinite;
}


.steam-one {
  left: 39px;
  top: -45px;
}


.steam-two {
  left: 66px;
  top: -52px;

  animation-delay: 1s;
}


.steam-three {
  left: 93px;
  top: -43px;

  animation-delay: 1.8s;
}


@keyframes steam {

  0% {
    opacity: 0;

    transform:
      translateY(20px)
      scale(0.75);
  }

  35% {
    opacity: 0.8;
  }

  100% {
    opacity: 0;

    transform:
      translateY(-35px)
      scale(1.15);
  }
}


/* ==========================================
   APP CONTENT
========================================== */

.app-content {
  position: relative;

  z-index: 3;

  padding:
    6px 28px 32px;

  transform:
    translateZ(22px);
}


.app-category {
  color: var(--green);

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 0.2em;
}


.app-content h3 {
  margin:
    10px 0 15px;

  font-size:
    clamp(27px, 3vw, 38px);

  line-height: 1.1;

  letter-spacing: -0.04em;
}


.app-content h3 span {
  color: var(--green-bright);
}


.app-description {
  margin: 0;

  color: var(--muted);

  line-height: 1.8;
}


.feature-list {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 9px;

  margin-top: 24px;
}


.feature-item {
  display: flex;

  align-items: center;

  gap: 9px;

  padding:
    10px 12px;

  border:
    1px solid rgba(57, 217, 138, 0.08);

  border-radius: 12px;

  background:
    rgba(255, 255, 255, 0.02);

  color: #cbdad2;

  font-size: 12px;
}


.feature-icon {
  font-size: 16px;
}


/* ==========================================
   STORE
========================================== */

.store-buttons {
  margin-top: 24px;
}


.store-button {
  display: inline-flex;

  align-items: center;

  gap: 12px;

  padding:
    11px 17px;

  min-width: 175px;

  border:
    1px solid rgba(57, 217, 138, 0.22);

  border-radius: 14px;

  background:
    rgba(57, 217, 138, 0.045);

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;
}


.store-button:hover {
  transform: translateY(-3px);

  background:
    rgba(57, 217, 138, 0.09);

  border-color:
    rgba(57, 217, 138, 0.5);
}


.store-icon {
  font-size: 25px;

  color: var(--green-bright);
}


.store-text {
  display: flex;

  flex-direction: column;

  color: white;

  font-weight: 700;

  font-size: 14px;
}


.store-text small {
  color: var(--muted);

  font-size: 8px;

  letter-spacing: 0.12em;
}


/* ==========================================
   ABOUT / VISION
========================================== */

.split-section {
  display: grid;

  grid-template-columns:
    1.5fr
    1fr
    1fr
    1fr;

  gap: 18px;

  align-items: stretch;
}


.split-section .single {
  padding-right: 25px;
}


.split-section .single p {
  max-width: 600px;

  color: var(--muted);

  line-height: 1.8;

  margin-top: 21px;
}


.vision-card {
  padding: 28px;

  border:
    1px solid var(--border);

  border-radius: 21px;

  background:
    rgba(13, 27, 19, 0.67);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;
}


.vision-card:hover {
  transform: translateY(-8px);

  border-color:
    rgba(57, 217, 138, 0.35);

  background:
    rgba(57, 217, 138, 0.045);
}


.vision-number {
  color: var(--green);

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 0.12em;
}


.vision-card h3 {
  margin:
    24px 0 10px;

  font-size: 23px;
}


.vision-card p {
  margin: 0;

  color: var(--muted);

  font-size: 14px;

  line-height: 1.8;
}


/* ==========================================
   DETAIL SECTION
========================================== */

.detail-section {
  padding:
    100px 0;
}


.detail-section > p {
  max-width: 700px;

  color: var(--muted);

  font-size: 17px;

  line-height: 1.9;

  margin-top: 24px;
}


.detail-label {
  color: var(--green);

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 0.2em;
}


.detail-grid {
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 18px;

  margin-top: 38px;
}


.detail-item {
  display: flex;

  gap: 15px;

  padding: 22px;

  border:
    1px solid var(--border);

  border-radius: 20px;

  background:
    rgba(13, 27, 19, 0.58);
}


.detail-item > span {
  font-size: 27px;
}


.detail-item strong {
  display: block;

  margin-bottom: 7px;
}


.detail-item p {
  margin: 0;

  color: var(--muted);

  font-size: 13px;

  line-height: 1.7;
}


/* ==========================================
   CONTACT
========================================== */

.contact-section {
  position: relative;

  overflow: hidden;

  margin:
    40px 0 110px;

  padding:
    90px 35px;

  text-align: center;

  border:
    1px solid var(--border-strong);

  border-radius: 30px;

  background:
    radial-gradient(
      circle at center,
      rgba(57, 217, 138, 0.10),
      transparent 50%
    ),
    linear-gradient(
      180deg,
      rgba(16, 34, 23, 0.92),
      rgba(7, 16, 11, 0.92)
    );

  box-shadow:
    var(--shadow);
}


.contact-glow {
  position: absolute;

  width: 250px;
  height: 250px;

  left: 50%;
  top: 50%;

  transform:
    translate(-50%, -50%);

  background:
    var(--green);

  filter:
    blur(100px);

  opacity: 0.07;

  pointer-events: none;
}


.contact-section h2 {
  position: relative;
}


.contact-section p {
  position: relative;

  color: var(--muted);

  margin:
    18px 0 18px;
}


.contact-email {
  position: relative;

  display: inline-block;

  color: var(--green-bright);

  font-size: 18px;

  font-weight: 700;

  border-bottom:
    1px solid rgba(98, 231, 164, 0.4);

  padding-bottom: 4px;
}


/* ==========================================
   FOOTER
========================================== */

.site-footer {
  position: relative;

  z-index: 2;

  border-top:
    1px solid rgba(57, 217, 138, 0.08);

  background:
    rgba(2, 7, 5, 0.72);

  backdrop-filter: blur(20px);
}


.footer-inner {
  width: min(1180px, calc(100% - 36px));

  margin: auto;

  padding:
    35px 0;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;
}


.footer-brand {
  font-size: 14px;

  font-weight: 800;

  letter-spacing: 0.1em;
}


.footer-inner p {
  margin: 7px 0 0;

  color: var(--muted);

  font-size: 12px;
}


.footer-links {
  display: flex;

  gap: 22px;

  flex-wrap: wrap;

  justify-content: end;
}


.footer-links a {
  color: var(--muted);

  font-size: 12px;

  transition:
    color 0.2s ease;
}


.footer-links a:hover {
  color: var(--green-bright);
}


.copyright {
  width: min(1180px, calc(100% - 36px));

  margin: auto;

  padding:
    17px 0 24px;

  border-top:
    1px solid rgba(255, 255, 255, 0.04);

  color: #617269;

  text-align: center;

  font-size: 11px;
}


/* ==========================================
   ANIMATIONS
========================================== */

@keyframes fadeUp {

  from {
    opacity: 0;

    transform:
      translateY(28px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }

}


/* ==========================================
   MOBILE
========================================== */

@media (max-width: 950px) {

  .apps-grid {
    grid-template-columns: 1fr;
  }


  .split-section {
    grid-template-columns:
      1fr 1fr;
  }


  .split-section .single {
    grid-column:
      1 / -1;
  }


  .detail-grid {
    grid-template-columns:
      1fr;
  }

}


@media (max-width: 680px) {

  .header-inner {
    min-height: 65px;
  }


  .navigation {
    display: none;
  }


  .container {
    width:
      min(100% - 22px, 1180px);
  }


  .hero-section {
    min-height:
      680px;

    padding:
      85px 0 70px;
  }


  .hero-section h1 {
    font-size:
      clamp(48px, 15vw, 78px);
  }


  .hero-description {
    font-size: 15px;
  }


  .hero-actions {
    flex-direction: column;

    width: 100%;

    max-width: 300px;
  }


  .primary-button,
  .secondary-button {
    width: 100%;
  }


  .hero-stats {
    gap: 25px;

    margin-top: 55px;
  }


  .stat strong {
    font-size: 16px;
  }


  .section {
    padding: 65px 0;
  }


  .section-heading {
    display: block;
  }


  .section-heading > p {
    margin-top: 18px;
  }


  .app-card {
    min-height: auto;
  }


  .app-preview {
    height: 250px;
  }


  .app-preview img {
    width: 155px;
    height: 155px;
  }


  .feature-list {
    grid-template-columns:
      1fr;
  }


  .split-section {
    grid-template-columns:
      1fr;
  }


  .split-section .single {
    grid-column:
      auto;
  }


  .detail-section {
    padding:
      70px 0;
  }


  .contact-section {
    margin-bottom:
      70px;

    padding:
      70px 22px;
  }


  .footer-inner {
    flex-direction: column;

    align-items: flex-start;
  }


  .footer-links {
    justify-content:
      flex-start;
  }

}


@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;

    animation-duration:
      0.001ms !important;

    animation-iteration-count:
      1 !important;

    transition-duration:
      0.001ms !important;
  }

}
