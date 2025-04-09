export interface Crossword {
  id: string;
  title: string;
  date: string;
  description?: string;
  tags: string[];
  puzFile: string;
}

export const crosswords: Crossword[] = [
  {
    id: 'submission-6',
    title: 'Submission 6',
    date: '2024-12-05',
    tags: ['NYT Rejects'],
    description: `Submitted Sept 23, 2024; Rejected Dec 5, 2024`,
    puzFile: `<iframe height="700px" width="100%" allow="web-share; fullscreen" style="border:none; width: 100% !important; position: static;display: block !important; margin: 0 !important;" src="https://puzzleme.amuselabs.com/pmm/crossword?id=8d0a788a&set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&embed=1" aria-label="Puzzle Me Game"> </iframe>`
  },
  {
    id: 'submission-5',
    title: 'Submission 5',
    date: '2024-05-16',
    tags: ['NYT Rejects'],
    description: `Submitted Apr 2, 2024; Rejected May 16, 2024`,
    puzFile: `<iframe height="700px" width="100%" allow="web-share; fullscreen" style="border:none; width: 100% !important; position: static;display: block !important; margin: 0 !important;" src="https://puzzleme.amuselabs.com/pmm/crossword?id=ab191ae7&set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&embed=1" aria-label="Puzzle Me Game"> </iframe>`
  },
  {
    id: 'old-friends',
    title: 'A Little Street Where Old Friends Meet',
    date: '2025-04-01',
    description: `<p>Published in the <a href="https://files.barbershop.org/PDFs/Harmonizer/2025-issues/Harmonizer_vol85_no2_marapr2025.pdf#page=13" target="_blank" rel="noreferrer noopener">April / May 2025 Harmonizer</a></p>`,
    tags: ['Barbershop'],
    puzFile: `<iframe height="700px" width="100%" allow="web-share; fullscreen" style="border:none; width: 100% !important; position: static;display: block !important; margin: 0 !important;" src="https://puzzleme.amuselabs.com/pmm/crossword?id=b0376c44&set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&embed=1" aria-label="Puzzle Me Game"> </iframe>`
  },
  {
    id: 'song-selection',
    title: 'Song Selection',
    date: '2024-11-01',
    description: `<p>Published in the <a href="https://files.barbershop.org/PDFs/Harmonizer/2024-issues/Harmonizer_vol84_no6_novdec2024.pdf#page=13" target="_blank" rel="noreferrer noopener">November / December 2024 Harmonizer</a></p>`,
    tags: ['Barbershop'],
    puzFile: `<iframe height="700px" width="100%" allow="web-share; fullscreen" style="border:none; width: 100% !important; position: static;display: block !important; margin: 0 !important;" src="https://amuselabs.com/pmm/crossword?id=08325142&set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&embed=1" aria-label="Puzzle Me Game"> </iframe>`
  },
  {
    id: 'common-goals',
    title: 'Common Goals',
    date: '2024-07-01',
    description: `<p>Published in the <a href="https://files.barbershop.org/PDFs/Harmonizer/2024-issues/Harmonizer_vol84_no4_julaug2024.pdf#page=11" target="_blank" rel="noreferrer noopener">July / August 2024 Harmonizer</a></p><p><strong>Spoilers:</strong>&nbsp;Check out the performance that inspired this puzzle&nbsp;<a href="https://www.youtube.com/watch?v=hxRykVIKwy8&amp;ab_channel=BarbershopHarmonySociety" target="_blank" rel="noreferrer noopener">on YouTube</a></p>`,
    tags: ['Barbershop'],
    puzFile: `<iframe height="700px" width="100%" allow="web-share; fullscreen" style="border:none; width: 100% !important; position: static;display: block !important; margin: 0 !important;" src="https://amuselabs.com/pmm/crossword?id=cb2fb597&set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&embed=1" aria-label="Puzzle Me Game"> </iframe>`
  },
  {
    id: 'keynote',
    title: 'Delivering The Keynote',
    date: '2023-05-01',
    description: `<p>Published in the <a href="https://files.barbershop.org/PDFs/Harmonizer/2023-issues/Harmonizer_vol83_no3_mayjun2023.pdf#page=13" target="_blank" rel="noreferrer noopener">May / June 2023 Harmonizer</a></p>`,
    tags: ['Barbershop'],
    puzFile: `<iframe height="700px" width="100%" allowfullscreen="true" style="border:none; width: 100% !important; position: static;display: block !important; margin: 0 !important;" name="5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4" src="https://amuselabs.com/pmm/crossword?id=eb4a1f61&set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&embed=1"> </iframe>`
  },
  {
    id: 'bell-chords',
    title: 'Bell Chords',
    date: '2023-01-01',
    description: `<p> Published in the <a rel="noreferrer noopener" href="https://files.barbershop.org/PDFs/Harmonizer/2023-issues/Harmonizer_vol83_no1_janfeb2023.pdf" target="_blank">January / February 2023 Harmonizer</a></p><p><strong>Spoilers:</strong>&nbsp;Check out the performance that inspired this puzzle&nbsp;<a href="https://youtu.be/Qo_N9_ZFBhs">on YouTube</a></p>`,
    tags: ['Barbershop'],
    puzFile: `<iframe height="700px" width="100%" allowfullscreen="true" style="border:none; width: 100% !important; position: static;display: block !important; margin: 0 !important;" name="5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4" src="https://amuselabs.com/pmm/crossword?id=e04e180e&amp;set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&amp;embed=1"> </iframe>`
  },
  {
    id: 'mixed-quartet',
    title: 'Mixed Quartet',
    date: '2022-07-01',
    description: `<p> Published in the&nbsp;<a rel="noreferrer noopener" href="https://files.barbershop.org/PDFs/Harmonizer/2022-issues/Harmonizer_vol82_no4_julaug2022.pdf" target="_blank">July / August 2022 Harmonizer</a></p><p><strong>Spoilers:</strong> Check out the performance that inspired this puzzle <a href="https://youtu.be/xc5d6F9iAig" target="_blank" rel="noreferrer noopener">on YouTube</a></p>`,
    tags: ['Barbershop'],
    puzFile: `<iframe height="700px" width="100%" allowfullscreen="true" style="border:none; width: 100% !important; position: static;display: block !important; margin: 0 !important;" name="5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4" src="https://amuselabs.com/pmm/crossword?id=6d29d792&amp;set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&amp;embed=1"> </iframe>`
  },
  {
    id: 'razzle-dazzle',
    title: 'Razzle Dazzle \'Em',
    date: '2021-11-01',
    description: `<p>Published in the&nbsp;<a rel="noreferrer noopener" href="https://files.barbershop.org/PDFs/Harmonizer/2021-Issues/Hzr_Nov_Dec_2021.pdf#page=14" target="_blank">November / December 2021 Harmonizer</a></p>`,
    tags: ['Barbershop'],
    puzFile: `<iframe height="700" width="100%" allowfullscreen="true" style="border:none;width: 100% !important;position: static;display: block !important;margin: 0 !important;" name="5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4" src="https://amuselabs.com/pmm/crossword?id=6a8c8da1&amp;set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&amp;embed=1"></iframe>`
  },
  {
    id: 'four-voices',
    title: 'Four Voices',
    date: '2021-07-01',
    description: `<p>Published in the&nbsp;<a rel="noreferrer noopener" href="https://files.barbershop.org/PDFs/Harmonizer/2021-Issues/Hzr-July-August-final.pdf#page=13" target="_blank">July / August 2021 Harmonizer</a>  </p>`,
    tags: ['Barbershop'],
    puzFile: `<iframe height="700" width="100%" allowfullscreen="true" style="border:none;width: 100% !important;position: static;display: block !important;margin: 0 !important;" name="5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4" src="https://amuselabs.com/pmm/crossword?id=7be03244&amp;set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&amp;embed=1"></iframe>`
  },
  {
    id: 'submission-4',
    title: 'Submission 4',
    date: '2021-07-13',
    description: `Submitted Apr 21, 2021; Rejected Jul 13, 2021`,
    tags: ['NYT Rejects'],
    puzFile: `<iframe height="700px" width="100%" allow="web-share; fullscreen" style="border:none; width: 100% !important; position: static;display: block !important; margin: 0 !important;" src="https://puzzleme.amuselabs.com/pmm/crossword?id=d0ed90e6&set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&embed=1" aria-label="Puzzle Me Game"> </iframe>`
  },
  {
    id: 'submission-3',
    title: 'Submission 3',
    date: '2021-07-13',
    description: `Submitted Apr 20, 2021; Rejected Jul 13, 2021`,
    tags: ['NYT Rejects'],
    puzFile: `<iframe height="700px" width="100%" allow="web-share; fullscreen" style="border:none; width: 100% !important; position: static;display: block !important; margin: 0 !important;" src="https://puzzleme.amuselabs.com/pmm/crossword?id=c5e61061&set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&embed=1" aria-label="Puzzle Me Game"> </iframe>`
  },
  {
    id: 'submission-2',
    title: 'Submission 2',
    date: '2021-04-20',
    description: `Submitted Feb 27, 2021; Rejected Apr 20, 2021`,
    tags: ['NYT Rejects'],
    puzFile: `<iframe height="700px" width="100%" allow="web-share; fullscreen" style="border:none; width: 100% !important; position: static;display: block !important; margin: 0 !important;" src="https://puzzleme.amuselabs.com/pmm/crossword?id=6dfce97d&set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&embed=1" aria-label="Puzzle Me Game"> </iframe>`
  },
  {
    id: 'relative-harmony',
    title: 'Relative Harmony',
    date: '2021-03-01',
    description: `<p>Published in the <a rel="noreferrer noopener" href="https://files.barbershop.org/PDFs/Harmonizer/2021-Issues/hzr-march-april-2021-final-1.pdf#page=15" target="_blank">March / April 2021 Harmonizer</a></p>`,
    puzFile: `<iframe height="700" width="100%" allowfullscreen="true" style="border:none;width: 100% !important;position: static;display: block !important;margin: 0 !important;" name="5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4" src="https://amuselabs.com/pmm/crossword?id=d628a9c5&amp;set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&amp;embed=1"></iframe>`,
    tags: ['Barbershop']
  },
  {
    id: 'submission-1',
    title: 'Submission 1',
    date: '2021-04-30',
    description: `Submitted Jan 24, 2021; Rejected Apr 30, 2021`,
    tags: ['NYT Rejects'],
    puzFile: `<iframe height="700px" width="100%" allow="web-share; fullscreen" style="border:none; width: 100% !important; position: static;display: block !important; margin: 0 !important;" src="https://puzzleme.amuselabs.com/pmm/crossword?id=f5d8af5c&set=5a46f42ef134628d1cea2a0458a51cd2d788720b2010eb08bdcecc65ee0ccdf4&embed=1" aria-label="Puzzle Me Game"> </iframe>`
  }
]; 