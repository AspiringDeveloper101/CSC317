Hello. Can you please create me a CSS file for a portfolio website a Mario game theme. It should include a navigation bar, header/intro section, bio section, education section, skills section, projects section, and a footer. Please make the styling responsive so that it works on a tablet, ipad, mobile, and desktop devices. Also use modern CSS techniques and include a smooth transitioning animation when hovering over the navigation links. Please also make the text style easy to read and provide helpful comments that explain what different parts of the css do. Please also use this html structure as a reference for the css style:

[//]: # (<!DOCTYPE html>)

[//]: # (<html lang="en">)

[//]: # (<head>)

[//]: # (    <meta charset="UTF-8" >)

[//]: # (    <meta name="viewport" content="width=device-width, initial-scale=1.0">)

[//]: # (    <title>Serena Liu Portfolio</title>)

[//]: # (    <link rel="stylesheet" href="styles/styles.css" id="css-theme">)

[//]: # ()
[//]: # (    <style>)

[//]: # (        .theme-switcher {)

[//]: # (            position: fixed;)

[//]: # (            bottom: 70px;)

[//]: # (            right: 50px;)

[//]: # (            background-color: #474747;)

[//]: # (            padding: 10px;)

[//]: # (            box-shadow: var&#40;--shadow-border-padding&#41; var&#40;--shadow-color&#41;;)

[//]: # (            max-width: 300px;)

[//]: # (            z-index: 1000;)

[//]: # (        })

[//]: # ()
[//]: # (        .theme-switcher h3 {)

[//]: # (            font-size: var&#40;--font-size-lg&#41;;)

[//]: # (            text-align: center;)

[//]: # (            padding-bottom: 20px;)

[//]: # (        })

[//]: # ()
[//]: # (        .theme-buttons {)

[//]: # (            display: flex;)

[//]: # (            flex-wrap: wrap;)

[//]: # (            gap: 0.9rem;)

[//]: # (        })

[//]: # ()
[//]: # (        .theme-button {)

[//]: # (            padding: 0.4rem 1rem;)

[//]: # (            background-color: white;)

[//]: # (            font-size: 0.8rem;)

[//]: # (            cursor: pointer;)

[//]: # (            transition: all 0.3s ease;)

[//]: # (        })

[//]: # ()
[//]: # (        .theme-button:hover {)

[//]: # (            background-color: var&#40;--secondary-text-color&#41;;)

[//]: # (        })

[//]: # ()
[//]: # (        .theme-button.active {)

[//]: # (            background-color: var&#40;--secondary-background-color&#41;;)

[//]: # (        })

[//]: # (    </style>)

[//]: # (</head>)

[//]: # (<body>)

[//]: # (    <header>)

[//]: # (        <img src="images/profile.jpg" alt="picture of Serena Liu" class="profile-img">)

[//]: # (        <h1>Serena Liu</h1>)

[//]: # (        <p class="subtitle">San Francisco State University Transfer Student</p>)

[//]: # (    </header>)

[//]: # (    <nav>)

[//]: # (        <div class="navigation-links">)

[//]: # (            <a href="#bio">Bio</a>)

[//]: # (            <a href="#education">Education</a>)

[//]: # (            <a href="#skills">Skills</a>)

[//]: # (            <a href="#projects">Projects</a>)

[//]: # (        </div>)

[//]: # (    </nav>)

[//]: # (    <main>)

[//]: # (        <section id="bio">)

[//]: # (            <h2>Bio</h2>)

[//]: # (            <p>I am an aspiring game developer who have demonstrated skills in active listening, information gathering, attention to details, editing documents, and the desire to learn. I originally got my AS in Computer Science degree at Canada College, which is located in Redwood City, CA, and then transferred to San Francisco State University. I am expected to graduate from there in Spring of 2026. I specialize in the Java language and am familiar with HTML5. I also have a bit of experience with git and git bash. I was also given a great opportunity to learn DevOps while also getting paid through a company called Revature.</p>)

[//]: # (        </section>)

[//]: # (        <section id="education">)

[//]: # (            <h2>Education</h2>)

[//]: # (            <div class="SF-State">)

[//]: # (                <h3>San Francisco State University</h3>)

[//]: # (                <p>Bachelor of Science in Computer Science</p>)

[//]: # (            </div>)

[//]: # (            <div class="Canada-College">)

[//]: # (                <h3>Ca&ntilde;ada College</h3>)

[//]: # (                <p>Associates of Science in Computer Science</p>)

[//]: # (                <p>Associates of Arts in Multimedia Art and Technology</p>)

[//]: # (            </div>)

[//]: # (        </section>)

[//]: # (        <section id="skills">)

[//]: # (            <h2>Skills</h2>)

[//]: # (            <ul class="list-of-skills">)

[//]: # (                <li>HTML5</li>)

[//]: # (                <li>CSS3</li>)

[//]: # (                <li>Java</li>)

[//]: # (                <li>Git</li>)

[//]: # (            </ul>)

[//]: # (        </section>)

[//]: # (        <section id="projects">)

[//]: # (            <h2>Projects</h2>)

[//]: # (            <div class="project-template">)

[//]: # (                <article class="project-box">)

[//]: # (                    <h3>CI/CD Green/Blue deployment of a pipeline </h3>)

[//]: # (                    <p>Automated deployment of a pipeline</p>)

[//]: # (                </article>)

[//]: # (                <article class="project-box">)

[//]: # (                    <h3>Portfolio Website</h3>)

[//]: # (                    <p>Website containing my portfolio</p>)

[//]: # (                </article>)

[//]: # (            </div>)

[//]: # (        </section>)

[//]: # (    </main>)

[//]: # (    <footer>)

[//]: # (        <p>Copyright &copy; Serena Liu 2025</p>)

[//]: # (    </footer>)

[//]: # (    <div class="theme-switcher">)

[//]: # (        <h3>Theme Switcher</h3>)

[//]: # (        <div class="theme-buttons">)

[//]: # (            <button class="theme-button active" data-theme="styles">Hand-Written</button>)

[//]: # (            <button class="theme-button" data-theme="ai-1">AI 1</button>)

[//]: # (            <button class="theme-button" data-theme="ai-2">AI Image</button>)

[//]: # (            <button class="theme-button" data-theme="hybrid">Hybrid</button>)

[//]: # (        </div>)

[//]: # (    </div>)

[//]: # (    <script>)

[//]: # (        document.addEventListener&#40;'DOMContentLoaded', function&#40;&#41; {)

[//]: # (            // Get all theme buttons)

[//]: # (            const themeButtons = document.querySelectorAll&#40;'.theme-button'&#41;;)

[//]: # (            // Get the stylesheet link element)

[//]: # (            const themeStylesheet = document.getElementById&#40;'css-theme'&#41;;)

[//]: # ()
[//]: # (            // Function to set active theme)

[//]: # (            function setActiveTheme&#40;themeName&#41; {)

[//]: # (                // Update stylesheet href)

[//]: # (                themeStylesheet.href = styles/${themeName}.css;)

[//]: # ()
[//]: # (                // Update active button state)

[//]: # (                themeButtons.forEach&#40;button => {)

[//]: # (                    if &#40;button.dataset.theme === themeName&#41; {)

[//]: # (                        button.classList.add&#40;'active'&#41;;)

[//]: # (                    } else {)

[//]: # (                        button.classList.remove&#40;'active'&#41;;)

[//]: # (                    })

[//]: # (                }&#41;;)

[//]: # ()
[//]: # (                // Save preference to localStorage)

[//]: # (                localStorage.setItem&#40;'preferredTheme', themeName&#41;;)

[//]: # (            })

[//]: # ()
[//]: # (            // Add click event to all theme buttons)

[//]: # (            themeButtons.forEach&#40;button => {)

[//]: # (                button.addEventListener&#40;'click', function&#40;&#41; {)

[//]: # (                    const themeName = this.dataset.theme;)

[//]: # (                    setActiveTheme&#40;themeName&#41;;)

[//]: # (                }&#41;;)

[//]: # (            }&#41;;)

[//]: # ()
[//]: # (            // Check if there's a saved theme preference)

[//]: # (            const savedTheme = localStorage.getItem&#40;'preferredTheme'&#41;;)

[//]: # (            if &#40;savedTheme&#41; {)

[//]: # (                setActiveTheme&#40;savedTheme&#41;;)

[//]: # (            })

[//]: # (        }&#41;;)

[//]: # (    </script>)

[//]: # (</body>)

[//]: # (</html>)