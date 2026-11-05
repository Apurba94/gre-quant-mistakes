# Quant Mistake Patterns

Learn the classic traps, such as forgetting negatives or zero, and practise questions built around each.

Part of the [GRE and TOEFL Study Suite](https://github.com/Apurba94/gre-toefl-study-suite): 100 free study apps for the GRE General Test and more. It works offline, as a Windows program or in the browser.

## Download and run

- **Windows:** download `Quant Mistake Patterns.exe` from the [latest release](https://github.com/Apurba94/gre-quant-mistakes/releases/latest) and open it. Nothing to install. It opens in its own window and saves your progress in your user folder.
- **Browser:** open it online in the suite's web edition at https://gre-toefl-study-suite.vercel.app/apps/gre-quant-mistakes/ . Progress stays in that browser.
- **From source:** `python launcher.py` (Python 3.10 or later, no packages needed).

## What it does

Most lost Quant points come from a handful of traps that test makers use again and again. This app explains eight of them, shows the fix for each, and gives generated questions where the trap answer is always among the choices.

Sections: Traps, Practice, Progress, About.

## How to use it

1. Read the traps in **Traps**.
2. Practise one trap at a time in **Practice**.
3. When you fall for one, write the fix on your scratch-paper checklist for test day.

## Good to know

- All questions, passages and definitions were written for this suite. None are official ETS questions. For official practice, use the materials on ets.org.
- It follows the GRE General Test as shortened in September 2023 and the TOEFL iBT as updated in January 2026. Formats change, so check ets.org before your test.
- Feedback on writing and speaking counts things a program can count honestly, such as length and linking words. It does not give an official score.
- Not endorsed by or affiliated with ETS. GRE and TOEFL are registered trademarks of ETS.

## For developers

The app is plain HTML and JavaScript in `web/`, run by a small Python launcher that serves it on 127.0.0.1 only and needs a secret token for saving. Tests: `node --test "tests/*.test.js"` (23 tests) and `python -m unittest discover -s tests`. Build the .exe with `python build_exe.py`.

Built with AI assistance (Claude Code). MIT licence. By JANIN A APURBA.
