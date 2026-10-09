// java-oop-data.js
// Excellent Institute - Object Oriented Programming using Java

const javaBookData = [
    // ==========================================
    // MODULE 1: INTRODUCTION
    // ==========================================
    {
        id: "module1",
        title: "Module 1: Introduction to Java Syntax",
        topics: [
            {
                heading: "What is Java?",
                text: "Java is one of the most powerful programming languages in the world. It is used to build Android apps, bank servers, and even video games like Minecraft! <br><br>Java's superpower is <strong>'Write Once, Run Anywhere' (WORA)</strong>. Because of a magic engine called the JVM (Java Virtual Machine), code you write on a Windows PC will run perfectly on a Mac or Linux computer without changing a single line.",
                shortcut: "Java is completely different from JavaScript. Car is to Carpet what Java is to JavaScript!"
            },
            {
                heading: "The Basic Syntax (Hello World)",
                text: "Every Java program must have a <code>class</code>, and every program must start from a <code>main</code> method. Think of the <code>main</code> method as the front door of your house; without it, the computer cannot enter your code.",
                shortcut: "Slide to the 'Terminal Output' tab to see what happens when you run this code!",
                interactiveCode: {
                    javaCode: `public class Main {
    public static void main(String[] args) {
        // This line prints text to the screen!
        System.out.println("Hello, Excellent Institute!");
        System.out.println("I am learning Java.");
    }
}`,
                    outputHtml: `Hello, Excellent Institute!<br>I am learning Java.`
                }
            }
        ]
    },

    // ==========================================
    // MODULE 2: CLASSES & OBJECTS
    // ==========================================
    {
        id: "module2",
        title: "Module 2: Classes and Objects",
        topics: [
            {
                heading: "The Blueprint Analogy",
                text: "Welcome to Object-Oriented Programming (OOP)! <br><br>Think of a <strong>Class</strong> as an architectural blueprint for a house on paper. You cannot live inside a blueprint. <br>An <strong>Object</strong> is the actual physical house built from that blueprint. You can build 100 physical houses (Objects) from 1 single blueprint (Class)!",
                shortcut: "Variables inside a class are called 'Attributes'. Functions inside a class are called 'Methods'."
            },
            {
                heading: "Creating Your First Object",
                text: "Let's create a blueprint (Class) for a <code>Car</code>. It will have attributes like color and speed. Then, inside our main door, we will use the <code>new</code> keyword to build two actual cars!",
                shortcut: "The 'new' keyword tells the computer memory to physically build the object.",
                interactiveCode: {
                    javaCode: `class Car {
    String color;
    int maxSpeed;

    void honk() {
        System.out.println("Beep Beep! I am a " + color + " car!");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myBMW = new Car(); // Building the object!
        myBMW.color = "Red";
        myBMW.honk();

        Car myAudi = new Car(); // Building a second object!
        myAudi.color = "Black";
        myAudi.honk();
    }
}`,
                    outputHtml: `Beep Beep! I am a Red car!<br>Beep Beep! I am a Black car!`
                }
            }
        ]
    },

    // ==========================================
    // MODULE 3: INHERITANCE & POLYMORPHISM
    // ==========================================
    {
        id: "module3",
        title: "Module 3: Inheritance and Polymorphism",
        topics: [
            {
                heading: "Inheritance (Parent & Child)",
                text: "Why write the same code twice? <strong>Inheritance</strong> allows a Child class to steal all the attributes and methods of a Parent class using the keyword <code>extends</code>. <br><br>If we have an <code>Animal</code> class that breathes, a <code>Dog</code> class can inherit it so we don't have to code breathing again!",
                shortcut: "Inheritance creates an 'IS-A' relationship. A Dog IS-A Animal."
            },
            {
                heading: "Polymorphism (Many Forms)",
                text: "<strong>Polymorphism</strong> means 'many forms'. It allows a Child class to change how a Parent's method works. For example, all animals 'makeSound()', but a Dog barks and a Cat meows. We use <code>@Override</code> to rewrite the Parent's rule.",
                shortcut: "Check the Terminal Output to see how the same command produces different results!",
                interactiveCode: {
                    javaCode: `class Animal {
    void makeSound() {
        System.out.println("Some generic animal sound...");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Dog says: Woof! Woof!");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Cat says: Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();

        myDog.makeSound(); // Java knows to use the Dog's version!
        myCat.makeSound();
    }
}`,
                    outputHtml: `Dog says: Woof! Woof!<br>Cat says: Meow!`
                }
            }
        ]
    },

    // ==========================================
    // MODULE 4: INTERFACES & PACKAGES
    // ==========================================
    {
        id: "module4",
        title: "Module 4: Interfaces and Packages",
        topics: [
            {
                heading: "Interfaces (The Strict Contract)",
                text: "An <strong>Interface</strong> is a strict contract. It is a completely empty list of rules. If a Class signs the contract using the keyword <code>implements</code>, it MUST write the code for those rules, otherwise Java will throw an error!<br><br>We use them to guarantee that certain objects have certain abilities (like a 'Driveable' interface).",
                shortcut: "A Class can only 'extend' ONE Parent, but it can 'implement' MULTIPLE Interfaces!"
            },
            {
                heading: "Packages (Organizing Code)",
                text: "A <strong>Package</strong> is simply a folder on your computer. When you write massive programs with 500 classes, you cannot keep them in one folder. You group them (e.g., <code>java.util</code> or <code>excellent.students</code>). <br><br>To use a class from another folder, you must <code>import</code> it at the top of your file.",
                shortcut: "Scanner is imported from the java.util package to read keyboard typing!",
                interactiveCode: {
                    javaCode: `import java.util.Scanner; // Importing from a package!

interface Vehicle {
    void startEngine(); // Empty rule!
}

class Bike implements Vehicle {
    public void startEngine() {
        System.out.println("Bike Engine Started: Vroom!");
    }
}

public class Main {
    public static void main(String[] args) {
        Bike myBike = new Bike();
        myBike.startEngine();
    }
}`,
                    outputHtml: `Bike Engine Started: Vroom!`
                }
            }
        ]
    },

    // ==========================================
    // MODULE 5: EXCEPTION HANDLING
    // ==========================================
    {
        id: "module5",
        title: "Module 5: Exception Handling",
        topics: [
            {
                heading: "Crashing gracefully (Try & Catch)",
                text: "Sometimes code goes wrong. If a user tries to divide a number by zero, or load a file that doesn't exist, the whole Java program will crash and close! <br><br>We use <strong>try-catch</strong> blocks to protect our code. We 'try' the dangerous code, and if it fails, we 'catch' the error and handle it without crashing.",
                shortcut: "Always wrap dangerous operations (like Database connections or File reading) inside a try-catch block."
            },
            {
                heading: "Catching a Math Error",
                text: "Let's force an error by dividing by zero. Watch how the program survives and prints our custom message instead of a terrifying red error screen!",
                shortcut: "The 'finally' block is optional, but it ALWAYS runs whether there was an error or not.",
                interactiveCode: {
                    javaCode: `public class Main {
    public static void main(String[] args) {
        try {
            int[] myNumbers = {1, 2, 3};
            // Array only has 3 items (0,1,2). Let's try to print item 10!
            System.out.println(myNumbers[10]); 
            
        } catch (Exception e) {
            System.out.println("ERROR: You tried to grab an item that doesn't exist!");
        } finally {
            System.out.println("Closing system gracefully...");
        }
    }
}`,
                    outputHtml: `<span style="color:#ef4444;">ERROR: You tried to grab an item that doesn't exist!</span><br>Closing system gracefully...`
                }
            }
        ]
    },

    // ==========================================
    // MODULE 6: FILE HANDLING
    // ==========================================
    {
        id: "module6",
        title: "Module 6: File Handling",
        topics: [
            {
                heading: "Reading and Writing Text Files",
                text: "Java can create, read, and write actual files on your hard drive! To do this, we import the <code>java.io.File</code> and <code>FileWriter</code> classes.<br><br>Writing to a file is dangerous (the hard drive might be full), so Java forces you to use a <code>try-catch</code> block when doing File Handling.",
                shortcut: "Creating a file uses File.createNewFile(). Writing to it uses FileWriter.write()."
            },
            {
                heading: "File Writer Example",
                text: "Here is how you generate a text file using Java. If you ran this on your actual computer, a file named 'student.txt' would magically appear in your folder!",
                shortcut: "Always use .close() when you are done writing to a file, otherwise the data might not save!",
                interactiveCode: {
                    javaCode: `import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("student.txt");
            writer.write("Name: Rahul Kumar\\nCourse: Java PGDCA");
            writer.close(); // Save and close!
            
            System.out.println("Successfully wrote data to the file.");
        } catch (IOException e) {
            System.out.println("An error occurred writing the file.");
        }
    }
}`,
                    outputHtml: `Successfully wrote data to the file.<br><br><em>(If ran on a PC, student.txt is now saved on the hard drive!)</em>`
                }
            }
        ]
    },

    // ==========================================
    // MODULE 7: GUI WITH AWT & SWING
    // ==========================================
    {
        id: "module7",
        title: "Module 7: GUI with AWT/Swing",
        topics: [
            {
                heading: "Building Visual Applications",
                text: "So far, our output has been boring text in a black terminal. <strong>Java Swing</strong> allows us to build real desktop applications with visual Windows, Buttons, and Text Boxes! <br><br>A window is called a <code>JFrame</code>. A button is called a <code>JButton</code>.",
                shortcut: "Swing is heavily event-driven. You attach an 'ActionListener' to a button to make it do something when clicked."
            },
            {
                heading: "Creating a Login Window",
                text: "Here is the exact Java code to generate a simple visual window with a button. Check the Output tab to see a simulation of the visual window that Java would render on your PC!",
                shortcut: "We use frame.setVisible(true) to actually make the window appear on the screen.",
                interactiveCode: {
                    javaCode: `import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        // Create the Window
        JFrame frame = new JFrame("Excellent Institute App");
        frame.setSize(300, 200);
        frame.setLayout(null);

        // Create a Button
        JButton btn = new JButton("Login");
        btn.setBounds(100, 60, 100, 40);

        // Add button to window and show it
        frame.add(btn);
        frame.setVisible(true);
    }
}`,
                    outputHtml: `<div style="width:300px; height:200px; background:#f0f0f0; border:2px solid #999; border-radius:5px 5px 0 0; box-shadow:0 5px 15px rgba(0,0,0,0.3); font-family:sans-serif; position:relative; margin:0 auto;">
  <div style="background:#0058e6; color:white; padding:5px 10px; font-size:12px; font-weight:bold; border-radius:3px 3px 0 0; display:flex; justify-content:space-between;">
    <span>☕ Excellent Institute App</span>
    <span>✖</span>
  </div>
  <button style="position:absolute; top:70px; left:100px; width:100px; height:35px; background:#e1e1e1; border:1px solid #7a7a7a; border-radius:3px; cursor:pointer;">Login</button>
</div>`
                }
            }
        ]
    },

    // ==========================================
    // MODULE 8: JDBC & DATABASE CONNECTIVITY
    // ==========================================
    {
        id: "module8",
        title: "Module 8: JDBC and Database Connectivity",
        topics: [
            {
                heading: "Connecting Java to MySQL",
                text: "Real applications need a Database to save user data permanently. <strong>JDBC (Java Database Connectivity)</strong> is the bridge between your Java code and a database like MySQL.<br><br>The process is: <br>1. Register the Driver.<br>2. Open the Connection.<br>3. Execute SQL Query.<br>4. Read the ResultSet.<br>5. Close the Connection.",
                shortcut: "You must include the 'mysql-connector.jar' file in your project libraries for JDBC to work!"
            },
            {
                heading: "Executing a SQL Query in Java",
                text: "Here is how you connect to a MySQL database named 'schoolDB' and fetch the names of all the students. It requires a try-catch block because the database server might be offline!",
                shortcut: "The executeQuery() method sends your SQL string directly to the database.",
                interactiveCode: {
                    javaCode: `import java.sql.*;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/schoolDB";
        String user = "root";
        String password = "password123";

        try {
            // Connect to database
            Connection conn = DriverManager.getConnection(url, user, password);
            Statement stmt = conn.createStatement();
            
            // Execute SQL
            ResultSet rs = stmt.executeQuery("SELECT name FROM students");

            // Print the results
            while(rs.next()) {
                System.out.println("Student Name: " + rs.getString("name"));
            }
            
            conn.close();
        } catch (Exception e) {
            System.out.println("Database connection failed!");
        }
    }
}`,
                    outputHtml: `<em>[System Connecting to jdbc:mysql...]</em><br><br>Student Name: Anil Gouda<br>Student Name: Rajesh Sahoo<br>Student Name: Priya Patel<br><br><em>[Connection Closed Successfully]</em>`
                }
            }
        ]
    }
];
