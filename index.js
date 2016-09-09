module.exports = {

  path: './README.md',

  sections: [
    {
      title: "Applying Polya's Techniques to Software",
      links: [
        {
          text: "Understand the Problem",
          links: [
            {text: 'Identify Inputs and Outputs', url: './Steps/Inputs and Outputs.md'},
            {text: 'Ask "What if" Questions', url: './Steps/What If Questions.md'},
          ]
        },
        {
          text: 'Devise a Plan',
          url: './Steps/Tradeoffs and Choices.md',
          links: [
            {text: "Come up with more than one possible solution"},
            {text: "Choose a solution based on Performance, Maintainability and your Capability"},
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
            {text: 'Check for correctness'},
            {
              text: 'Look for opportunities to refactor',
              links: [
                {text: "DRY",},
                {text: "SOLID",},
              ],
            },
          ]
        },
      ]
    },

    {
      title: 'Warmups',
      links: [
        {text: 'Making the Most of Warmups', url: './Warmups.md'},
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
