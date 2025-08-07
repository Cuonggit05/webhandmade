// Page loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".page-loader")
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hidden")
    }, 500)
  }
})

// Back to top button functionality
const backToTop = document.getElementById("backToTop")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add("show")
  } else {
    backToTop.classList.remove("show")
  }
})

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Modal functions
function showLogin() {
  document.getElementById("loginModal").classList.remove("hidden")
  document.getElementById("registerModal").classList.add("hidden")
}

function showRegister() {
  document.getElementById("registerModal").classList.remove("hidden")
  document.getElementById("loginModal").classList.add("hidden")
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden")
}

// Close modals when clicking outside
window.addEventListener("click", (event) => {
  if (event.target.id === "loginModal" || event.target.id === "registerModal") {
    event.target.classList.add("hidden")
  }
})

// Form handling
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm")
  const registerForm = document.getElementById("registerForm")

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const formData = new FormData(this)
      const data = Object.fromEntries(formData)

      console.log("Login data:", data)
      alert("Login functionality would connect to backend")
      closeModal("loginModal")
    })
  }

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const formData = new FormData(this)
      const data = Object.fromEntries(formData)

      if (data.password !== data.confirmPassword) {
        alert("Passwords do not match!")
        return
      }

      console.log("Register data:", data)
      alert("Registration successful! Please check your email to verify your account.")
      closeModal("registerModal")
      showLogin()
    })
  }
})

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view")
    }
  })
}, observerOptions)

// Observe all elements with animation classes
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-on-scroll, .stagger-children")
  animatedElements.forEach((el) => observer.observe(el))
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (header) {
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Product card animations
document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll(".product-card")

  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.02)"
      this.style.boxShadow = "0 25px 50px rgba(0,0,0,0.15)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
      this.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"
    })
  })
})

// Cart functionality with animations
document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.querySelector(".cart-icon")
  const cartPreview = document.querySelector(".cart-preview")

  if (cartIcon && cartPreview) {
    cartIcon.addEventListener("mouseenter", () => {
      cartPreview.style.display = "block"
      setTimeout(() => {
        cartPreview.style.opacity = "1"
        cartPreview.style.transform = "translateY(0)"
      }, 10)
    })

    cartIcon.addEventListener("mouseleave", () => {
      cartPreview.style.opacity = "0"
      cartPreview.style.transform = "translateY(-10px)"
      setTimeout(() => {
        cartPreview.style.display = "none"
      }, 300)
    })
  }
})

// Add to cart animation
function addToCartAnimation(button) {
  const originalText = button.innerHTML
  button.innerHTML = '<i class="fas fa-check"></i> Added!'
  button.style.background = "linear-gradient(135deg, #22c55e, #16a34a)"

  setTimeout(() => {
    button.innerHTML = originalText
    button.style.background = ""
  }, 2000)
}

// Newsletter form animation
document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.querySelector(".newsletter-form")
  const newsletterInput = document.querySelector(".newsletter-input")

  if (newsletterForm && newsletterInput) {
    newsletterInput.addEventListener("focus", () => {
      newsletterForm.style.transform = "scale(1.02)"
    })

    newsletterInput.addEventListener("blur", () => {
      newsletterForm.style.transform = "scale(1)"
    })
  }
})

// Testimonial card stagger animation
document.addEventListener("DOMContentLoaded", () => {
  const testimonialCards = document.querySelectorAll(".testimonial-card")

  const testimonialObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }, index * 200)
        }
      })
    },
    { threshold: 0.1 },
  )

  testimonialCards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "all 0.6s ease"
    testimonialObserver.observe(card)
  })
})

// Loading animation for buttons
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-primary")

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (!this.classList.contains("loading")) {
        this.classList.add("loading")

        setTimeout(() => {
          this.classList.remove("loading")
        }, 1500)
      }
    })
  })
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroImage = document.querySelector(".hero-image img")

  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Mobile menu animation (if needed)
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-button")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      // Add mobile menu animation logic here
      console.log("Mobile menu clicked")
    })
  }
})

// Form validation with animations
function validateFormWithAnimation(form) {
  const inputs = form.querySelectorAll("input[required]")
  let isValid = true

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "#ef4444"
      input.style.animation = "shake 0.5s ease-in-out"
      isValid = false

      setTimeout(() => {
        input.style.animation = ""
      }, 500)
    } else {
      input.style.borderColor = "#22c55e"
    }
  })

  return isValid
}

// Add shake animation to CSS
const shakeKeyframes = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}
`

// Add the keyframes to the document
const style = document.createElement("style")
style.textContent = shakeKeyframes
document.head.appendChild(style)

// Initialize all animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add page loader
  const body = document.body
  const loader = document.createElement("div")
  loader.className = "page-loader"
  loader.innerHTML = '<div class="loader-spinner"></div>'
  body.appendChild(loader)

  // Add animation classes to elements
  const sections = document.querySelectorAll("section")
  sections.forEach((section, index) => {
    section.classList.add("animate-on-scroll")
    if (index % 2 === 0) {
      section.classList.add("from-left")
    } else {
      section.classList.add("from-right")
    }
  })

  // Add stagger animation to grids
  const grids = document.querySelectorAll(".product-grid, .testimonials-grid, .category-grid, .artisan-grid")
  grids.forEach((grid) => {
    grid.classList.add("stagger-children")
  })
})
