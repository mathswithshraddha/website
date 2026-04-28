import os
import re

files_to_fix = [
    "components/FAQSection.tsx",
    "components/OurStorySection.tsx",
    "components/ProblemSection.tsx",
    "components/ResultsSection.tsx",
    "components/SchoolsSection.tsx",
    "components/Testimonials.tsx"
]

for file_path in files_to_fix:
    if os.path.exists(file_path):
        with open(file_path, "r") as f:
            content = f.read()
        
        # very simple replacements based on known texts
        content = content.replace('We\'ve got answers', 'We&apos;ve got answers')
        content = content.replace('don\'t see', 'don&apos;t see')
        
        content = content.replace('didn\'t start', 'didn&apos;t start')
        content = content.replace('"Seeing the \'aha\' moment in a student\'s eyes is why I teach."', '&quot;Seeing the &apos;aha&apos; moment in a student&apos;s eyes is why I teach.&quot;')
        
        content = content.replace('It\'s heartbreaking', 'It&apos;s heartbreaking')
        content = content.replace('isn\'t their potentialit\'s', 'isn&apos;t their potentialit&apos;s')
        content = content.replace('they\'ve been taught', 'they&apos;ve been taught')
        content = content.replace('works until it doesn\'t', 'works until it doesn&apos;t')
        content = content.replace('Poor scores don\'t just affect', 'Poor scores don&apos;t just affect')
        content = content.replace('"We don\'t rush. We don\'t move on until the \'aha moment\' happens  and it always does."', '&quot;We don&apos;t rush. We don&apos;t move on until the &apos;aha moment&apos; happens  and it always does.&quot;')
        
        content = content.replace('child\'s name', 'child&apos;s name')
        content = content.replace('Mumbai\'s', 'Mumbai&apos;s')
        content = content.replace('"{testimonials[activeIndex].text}"', '&quot;{testimonials[activeIndex].text}&quot;')
        
        with open(file_path, "w") as f:
            f.write(content)
