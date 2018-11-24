###exercise2
1. create an input field (in App component) with a change listener which outputs the length of the entered text below (eg in a paragraph)

2. create a new component (=> ValidationComponent) which receives the text length as a prop

3. Inside the ValidationComponent, either output "Text too short" or "text long enough" depending on the text length (eg take 5 as a min length)

4. create another component (=>CharComponent) and style it as an inline box (=>display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)

5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop

6. When you click a CharComponent, it should be removed from the entered text.
