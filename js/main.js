function getActivePageKey() {
    const classList = document.body.classList;
    if (classList.contains('page-home')) return 'home';
    if (classList.contains('page-about')) return 'about';
    if (classList.contains('page-nisu')) return 'nisu';
    if (classList.contains('page-cics')) return 'cics';
    if (classList.contains('page-resume')) return 'resume';
    if (classList.contains('page-404')) return '404';
    return 'home';
}

function createNavLink(href, label, key, activeKey) {
    return `<a href="${href}"${activeKey === key ? ' class="active-page"' : ''}>${label}</a>`;
}

function renderHeader() {
    const activeKey = getActivePageKey();
    const navLinks = [
        createNavLink('index.html', 'Home', 'home', activeKey),
        createNavLink('about.html', 'About', 'about', activeKey),
        createNavLink('resume.html', 'Resume', 'resume', activeKey),
    ].join('\n        ');

    return `
<nav class="header">
  <div class="header">
    <div class="logo"><a href="index.html" class="logo"><span>Jolan</span>Clark's</a> Portfolio</div>
    <div class="navbar">
      ${navLinks}
      <div class="nav-dropdown">
        <button class="nav-dropbtn" type="button">Contact</button>
        <div class="nav-dropdown-content">
          <a href="https://wa.me/639287328109" target="_blank"><i class='bx bxl-whatsapp'></i>WhatsApp: +63 928 732 8109</a>
          <a href="viber://chat?number=%2B639287328109" target="_blank"><svg class="viber-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.75c-4.987 0-9.025 3.972-9.025 8.875 0 1.844.58 3.556 1.56 4.968l-1.46 4.066 4.342-1.2a8.557 8.557 0 003.71.864c4.99 0 9.025-3.973 9.025-8.876S16.99 2.75 12 2.75zm-.28 12.9c-.11.15-.28.26-.46.26-.08 0-.16-.01-.23-.04a7.11 7.11 0 01-2.7-.96.5.5 0 01-.24-.52l.22-.9c.04-.18.18-.31.36-.34l1.58-.4c.15-.05.31 0 .42.1l.98.84c.16.14.4.16.58.05.29-.18.68-.42 1.05-.65.14-.09.33-.07.45.05l1.24 1.25c.18.18.2.46.05.66l-.7.93a.5.5 0 01-.66.14 11.14 11.14 0 01-1.9-1.1zM8.53 11.88c.16-.04.33.02.42.17l.57 1.10c.08.16.03.35-.12.45-.30.20-.62.38-.92.54-.17.08-.38.02-.48-.14l-.51-.77a.5.5 0 01.11-.66l.83-.69c.10-.08.22-.12.31-.10z"/></svg>Viber: +63 928 732 8109</a>
          <a href="mailto:sorillojolanclark@gmail.com"><i class='bx bx-envelope'></i>Email: sorillojolanclark@gmail.com</a>
          <div class="contact-socials">
            <a href="https://www.facebook.com/larck.sorillo/" target="_blank"><i class='bx bxl-facebook-circle'></i>Facebook</a>
            <a href="https://www.instagram.com/larck.sorillo/" target="_blank"><i class='bx bxl-instagram'></i>Instagram</a>
          </div>
        </div>
      </div>
    </div>
    <div class="hamburger" onclick="toggleMenu()" aria-label="Toggle Navigation Menu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</nav>
    `;
}

function getFooterCopyright() {
    const activeKey = getActivePageKey();
    const copyrightMap = {
        home: '© 2024 Jolan Clark Sorillo',
        about: '© 2024 Jolan Clark Sorillo',
        nisu: '© 2024 Northern Iloilo State University',
        cics: '© 2024 College of Information and Computing Studies',
        resume: '© 2024 Jolan Clark Sorillo',
        '404': '© 2024 Jolan Clark Sorillo',
    };
    return copyrightMap[activeKey] || copyrightMap.home;
}

function renderFooter() {
    return `
<footer class="footer">
  <div class="social">
    <h3>Social Media</h3>
    <br>
    <a href="https://www.facebook.com/larck.sorillo/" title="Facebook"><i class='bx bxl-facebook-circle'></i></a>
    <a href="https://www.instagram.com/larck.sorillo/" title="Instagram"><i class='bx bxl-instagram'></i></a>
    <a href="https://x.com/jolan_clark" title="Twiiter/X"><i class='bx bxl-twitter'></i></a>
    <a href="https://ph.pinterest.com/jolanclark/" title="Pinterest"><i class='bx bxl-pinterest'></i></a>
    <a href="https://www.linkedin.com/in/jolan-clark-sorillo-011197256/?originalSubdomain=ph" title="LinkedIn"><i class='bx bxl-linkedin-square'></i></a>
    <a href="https://github.com/JCsorillo" title="GitHub"><i class='bx bxl-github'></i></a>
    <a href="https://www.youtube.com/@jcplayz3756" title="YouTube"><i class='bx bxl-youtube'></i></a>
  </div>
  <ul class="list">
    <li><a href="#top">Back to Top<i class="fas fa-arrow-up"></i></a></li>
    <li><a href="about.html">About Me</a></li>
    <li><a href="nisu.html">NISU</a></li>
    <li><a href="cics.html">CICS</a></li>
    <li><a href="https://maps.app.goo.gl/dL7Acgz8pCFnC5666">Google Map</a></li>
  </ul>
  <p class="copyright">${getFooterCopyright()}</p>
</footer>
    `;
}

function injectSiteShell() {
    const headerContainer = document.getElementById('site-header');
    const footerContainer = document.getElementById('site-footer');

    if (headerContainer) {
        headerContainer.innerHTML = renderHeader();
    }
    if (footerContainer) {
        footerContainer.innerHTML = renderFooter();
    }
}

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.toggle('active');
    }
}

function initContactDropdown() {
    const navDropdownButton = document.querySelector('.nav-dropbtn');
    const navDropdown = document.querySelector('.nav-dropdown');

    if (!navDropdownButton || !navDropdown) return;

    navDropdownButton.addEventListener('click', function(event) {
        event.stopPropagation();
        navDropdown.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!navDropdown.contains(event.target)) {
            navDropdown.classList.remove('active');
        }
    });
}

function initFaqToggle() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.toggle('open');
        });
    });
}

function initRevealObserver() {
    const revealTargets = document.querySelectorAll('.scroll-reveal, .about-card, .content-section');
    if (!revealTargets.length) return;

    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    revealTargets.forEach(function(target) {
        revealObserver.observe(target);
    });
}

function initCommonUI() {
    injectSiteShell();
    initContactDropdown();
    initFaqToggle();
    initRevealObserver();
}

window.addEventListener('DOMContentLoaded', initCommonUI);
