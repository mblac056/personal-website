export interface Crossword {
  id: string;
  title: string;
  date: string;
  description?: string;
  tags: string[];
  puzzleId: string;
}

export const crosswords: Crossword[] = [
  {
    id: 'submission-7',
    title: 'Submission 7',
    date: '2025-11-19',
    tags: ['NYT Rejects'],
    description: `Submitted Sept 27, 2025; Rejected Nov 19, 2025`,
    puzzleId: '886176ec'
  },
  {
    id: 'submission-6',
    title: 'Submission 6',
    date: '2024-12-05',
    tags: ['NYT Rejects'],
    description: `Submitted Sept 23, 2024; Rejected Dec 5, 2024`,
    puzzleId: '8d0a788a'
  },
  {
    id: 'submission-5',
    title: 'Submission 5',
    date: '2024-05-16',
    tags: ['NYT Rejects'],
    description: `Submitted Apr 2, 2024; Rejected May 16, 2024`,
    puzzleId: 'ab191ae7'
  },
  {
    id: 'old-friends',
    title: 'A Little Street Where Old Friends Meet',
    date: '2025-04-01',
    description: `<p>Published in the <a href="https://files.barbershop.org/PDFs/Harmonizer/2025-issues/Harmonizer_vol85_no2_marapr2025.pdf#page=13" target="_blank" rel="noreferrer noopener">April / May 2025 Harmonizer</a></p>`,
    tags: ['Barbershop'],
    puzzleId: 'b0376c44'
  },
  {
    id: 'song-selection',
    title: 'Song Selection',
    date: '2024-11-01',
    description: `<p>Published in the <a href="https://files.barbershop.org/PDFs/Harmonizer/2024-issues/Harmonizer_vol84_no6_novdec2024.pdf#page=13" target="_blank" rel="noreferrer noopener">November / December 2024 Harmonizer</a></p>`,
    tags: ['Barbershop'],
    puzzleId: '08325142'
  },
  {
    id: 'common-goals',
    title: 'Common Goals',
    date: '2024-07-01',
    description: `<p>Published in the <a href="https://files.barbershop.org/PDFs/Harmonizer/2024-issues/Harmonizer_vol84_no4_julaug2024.pdf#page=11" target="_blank" rel="noreferrer noopener">July / August 2024 Harmonizer</a></p><p><strong>Spoilers:</strong>&nbsp;Check out the performance that inspired this puzzle&nbsp;<a href="https://www.youtube.com/watch?v=hxRykVIKwy8&amp;ab_channel=BarbershopHarmonySociety" target="_blank" rel="noreferrer noopener">on YouTube</a></p>`,
    tags: ['Barbershop'],
    puzzleId: 'cb2fb597'
  },
  {
    id: 'keynote',
    title: 'Delivering The Keynote',
    date: '2023-05-01',
    description: `<p>Published in the <a href="https://files.barbershop.org/PDFs/Harmonizer/2023-issues/Harmonizer_vol83_no3_mayjun2023.pdf#page=13" target="_blank" rel="noreferrer noopener">May / June 2023 Harmonizer</a></p>`,
    tags: ['Barbershop'],
    puzzleId: 'eb4a1f61'
  },
  {
    id: 'bell-chords',
    title: 'Bell Chords',
    date: '2023-01-01',
    description: `<p> Published in the <a rel="noreferrer noopener" href="https://files.barbershop.org/PDFs/Harmonizer/2023-issues/Harmonizer_vol83_no1_janfeb2023.pdf" target="_blank">January / February 2023 Harmonizer</a></p><p><strong>Spoilers:</strong>&nbsp;Check out the performance that inspired this puzzle&nbsp;<a href="https://youtu.be/Qo_N9_ZFBhs">on YouTube</a></p>`,
    tags: ['Barbershop'],
    puzzleId: 'e04e180e'
  },
  {
    id: 'mixed-quartet',
    title: 'Mixed Quartet',
    date: '2022-07-01',
    description: `<p> Published in the&nbsp;<a rel="noreferrer noopener" href="https://files.barbershop.org/PDFs/Harmonizer/2022-issues/Harmonizer_vol82_no4_julaug2022.pdf" target="_blank">July / August 2022 Harmonizer</a></p><p><strong>Spoilers:</strong> Check out the performance that inspired this puzzle <a href="https://youtu.be/xc5d6F9iAig" target="_blank" rel="noreferrer noopener">on YouTube</a></p>`,
    tags: ['Barbershop'],
    puzzleId: '6d29d792'
  },
  {
    id: 'razzle-dazzle',
    title: 'Razzle Dazzle \'Em',
    date: '2021-11-01',
    description: `<p>Published in the&nbsp;<a rel="noreferrer noopener" href="https://files.barbershop.org/PDFs/Harmonizer/2021-Issues/Hzr_Nov_Dec_2021.pdf#page=14" target="_blank">November / December 2021 Harmonizer</a></p>`,
    tags: ['Barbershop'],
    puzzleId: '6a8c8da1'
  },
  {
    id: 'four-voices',
    title: 'Four Voices',
    date: '2021-07-01',
    description: `<p>Published in the&nbsp;<a rel="noreferrer noopener" href="https://files.barbershop.org/PDFs/Harmonizer/2021-Issues/Hzr-July-August-final.pdf#page=13" target="_blank">July / August 2021 Harmonizer</a>  </p>`,
    tags: ['Barbershop'],
    puzzleId: '7be03244'
  },
  {
    id: 'submission-4',
    title: 'Submission 4',
    date: '2021-07-13',
    description: `Submitted Apr 21, 2021; Rejected Jul 13, 2021`,
    tags: ['NYT Rejects'],
    puzzleId: 'd0ed90e6'
  },
  {
    id: 'submission-3',
    title: 'Submission 3',
    date: '2021-07-13',
    description: `Submitted Apr 20, 2021; Rejected Jul 13, 2021`,
    tags: ['NYT Rejects'],
    puzzleId: 'c5e61061'
  },
  {
    id: 'submission-2',
    title: 'Submission 2',
    date: '2021-04-20',
    description: `Submitted Feb 27, 2021; Rejected Apr 20, 2021`,
    tags: ['NYT Rejects'],
    puzzleId: '6dfce97d'
  },
  {
    id: 'relative-harmony',
    title: 'Relative Harmony',
    date: '2021-03-01',
    description: `<p>Published in the <a rel="noreferrer noopener" href="https://files.barbershop.org/PDFs/Harmonizer/2021-Issues/hzr-march-april-2021-final-1.pdf#page=15" target="_blank">March / April 2021 Harmonizer</a></p>`,
    puzzleId: 'd628a9c5',
    tags: ['Barbershop']
  },
  {
    id: 'submission-1',
    title: 'Submission 1',
    date: '2021-04-30',
    description: `Submitted Jan 24, 2021; Rejected Apr 30, 2021`,
    tags: ['NYT Rejects'],
    puzzleId: 'f5d8af5c'
  }
]; 