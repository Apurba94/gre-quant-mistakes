/* Quant Mistake Patterns: the classic traps, each with an explanation and practice built around it. */
(function () {
  'use strict';
  const TRAPS = [
    { name: 'Wrong base for percent change', trap: 'Dividing by the new value instead of the old.', fix: 'Percent change = change ÷ original.', templates: ['percentChange', 'reversePercent'] },
    { name: 'Percents that seem to cancel', trap: 'Thinking +20% then −20% returns to the start.', fix: 'Multiply the factors: 1.2 × 0.8 = 0.96, a 4% loss.', templates: ['successive'] },
    { name: 'Averaging speeds', trap: 'Taking the mean of two speeds for a round trip.', fix: 'Average speed = total distance ÷ total time.', templates: ['roundTrip'] },
    { name: 'Forgetting zero, one and negatives', trap: 'Testing only positive whole numbers.', fix: 'Try 0, 1, −1, a fraction and a large number.', templates: ['qcSquare', 'qcNegative'] },
    { name: 'Order matters, or not', trap: 'Using permutations for a committee, or combinations for a ranking.', fix: 'Ask: would swapping two people give a different result?', templates: ['choose', 'arrange'] },
    { name: 'Draws without replacement', trap: 'Keeping the same total for the second draw.', fix: 'After one draw, one fewer item and one fewer of that kind.', templates: ['noReplace'] },
    { name: 'Flipping the inequality', trap: 'Dividing by a negative without flipping the sign.', fix: 'Multiplying or dividing by a negative reverses the inequality.', templates: ['ineq'] },
    { name: 'Squaring negatives', trap: 'Writing −3^{2} as −9 when x = −3 means (−3)^{2} = 9.', fix: 'Put substituted negatives in brackets.', templates: ['evaluate'] },
  ];
  const App = {
    about: 'Most lost Quant points come from a handful of traps that test makers use again and again. This app explains eight of them, shows the fix for each, and gives generated questions where the trap answer is always among the choices.',
    how: ['Read the traps in **Traps**.', 'Practise one trap at a time in **Practice**.', 'When you fall for one, write the fix on your scratch-paper checklist for test day.'],
    tabs: [
      { id: 'traps', label: 'Traps', render(el) { el.appendChild(SK.card('Eight classic traps', SK.table(['Trap', 'What goes wrong', 'The fix'], TRAPS.map((t) => [SK.h('strong', { text: t.name }), SK.h('span', {}, SK.rich(t.trap)), t.fix])))); } },
      { id: 'practice', label: 'Practice', render(el) {
        SK.quizStarter(el, { title: 'Trap practice', topics: TRAPS.map((t) => t.name), sizes: [5, 10, 16], make: (topic, n, seed) => SK.makeQuant(TRAPS.filter((t) => topic === 'All' || t.name === topic).flatMap((t) => t.templates), n, seed).map((q) => Object.assign(q, { topic: TRAPS.find((t) => t.templates.includes(q.template)).name })), seconds: (n) => n * 90 });
      } },
    ],
    TRAPS,
    checks: { 'every trap has practice that exists': (data, assert) => { for (const t of TRAPS) for (const n of t.templates) assert.equal(typeof SK.QUANT[n], 'function', n); } },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
