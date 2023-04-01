import "./blog.css"

function Blog(){
    return(
        <div className="blog2">
            <h1>Blog</h1>
            <div className="qa">
                <div>
                    <h4>What are the differences between Props and State.</h4>
                    <p>
                    In React JS, both props and state are used to manage data in components, but they serve different purposes.

                    Props are short for "properties", and they are used to pass data from a parent component down to its child components. 
                    Props are read-only, which means that a child component cannot modify its props directly. 
                    Instead, the parent component can modify the props and pass the updated data down to its children.

                    State, on the other hand, is used to manage data within a component itself. 
                    State can be changed by the component, usually as a result of user interaction or some other event. 
                    When state is updated, React re-renders the component and its children to reflect the new state.
                    </p>
                </div>
                <div>
                    <h4>How does useState work?</h4>
                    <p>
                        In React, the useState hook is used to manage state in functional components.
                        It allows you to add state to your components without needing to use a class component and the setState method.
                        Here's how useState works: The useState function takes one argument, which is the initial value of the state variable, 
                        and returns an array with two elements. The first element is the current value of the state variable, 
                        and the second element is a function that can be used to update the state variable.
                    </p>
                </div>
                <div>
                    <h4> What is the purpose of useEffect other than fetching data.</h4>
                    <p>
                    While fetching data is one of the most common use cases for the useEffect hook in React, 
                    it can also be used for many other purposes. 
                    Here are some other ways that you can use useEffect in your components:
                    Updating the title of the page,Updating the title of the page,Updating the title of the page.
                    </p>
                </div>
                <div>
                    <h4>How Does React work?</h4>
                    <p>React is a JavaScript library that is used to build user interfaces for web applications. 
                        React works by using a virtual DOM (Document Object Model) to efficiently update the user interface 
                        based on changes in the application's state.</p>
                </div>
            </div>
        </div>
    )
}

export default Blog;