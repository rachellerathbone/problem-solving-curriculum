module.exports = {

  path: './README.md',

  sections: [
    {
      title: "Applying Polya's Techniques to Software",
      links: [
        {
          text: "Understand the Problem",
          links: [
            {text: 'Step 1: Identify Inputs and Outputs', url: './Steps/Inputs and Outputs.md'},
            {text: 'Step 2: Ask "What if" Questions', url: './Steps/What If Questions.md'},
          ]
        },
        {
          text: 'Devise a Plan',
          url: './Steps/Tradeoffs and Choices.md',
          links: [
            {text: "Come up with more than one plan"},
            {text: "Evaluate your potential solutions and choose the most appropriate"},
          ]
        },
        {
          text: 'Carry Out the Plan',
          url: './Steps/Sandwich Code.md',
          links: [
            {text: "Quickly dispense with boilerplate code"},
            {text: "Write code 'outside in'"},
          ]
        },
        {
          text: 'Look Back',
          url: './Steps/Test Your Solution.md',
          links: [
            {text: 'Test every branch of your solution'},
            {text: 'Try to break your solution / do QA'},
          ]
        },
      ]
    },

    {
      title: 'The **Solve It!** Drill and Schedule',
      links: [
        {text: 'Introduction', url: './Solve It/README.md'},
        {text: 'Session 1', url: './Solve It/Session 1.md'},
        {text: 'Session 2', url: './Solve It/Session 2.md'},
        {text: 'Session 3', url: './Solve It/Session 3.md'},
        {text: 'Session 4', url: './Solve It/Session 4.md'},
        {text: 'Session 5', url: './Solve It/Session 5.md'},
        {text: 'Practice', url: './Solve It/Practice.md'},
      ]
    },
  ]

};
