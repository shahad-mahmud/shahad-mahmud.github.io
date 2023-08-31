---
permalink: /
layout: single
author_profile: true
toc: true
toc_sticky: true
---

# About Me

Hi! I am **Shahad Mahmud**.

As a *Machine Learning Engineer* and *Researcher*, I am passionate about exploring the exciting world of Natural Language Processing (NLP), with a particular focus on the Bangla language. I am always eager to learn about the latest technologies and coding practices that can help me push the boundaries of what's possible in this field.

## At a glance

- About 3.5 years of research and work experience in NLP.
- Open-source contributions at Hugging Face's [Transformers](https://github.com/huggingface/transformers/pulls?q=author%3Ashahad-mahmud){:target="_blank"}, Bangla [unicode converter](https://pypi.org/project/unicodeconverter/){:target="_blank"}, and Incremental Learning for ASR paper [implementation](https://github.com/shahad-mahmud/incremental_learning_for_asr){:target="_blank"}.
- Pursued Bachelor of Science in Computer Science and Engineering (CSE) from Rajshahi University of Engineering and Technology ([RUET](https://www.ruet.ac.bd/){:target="_blank"}).

## Recent Updates

- *[July 2023]* Found a bug in Sentencepiece tokenizer from the Transformers repository. Created an issue and after discussion solved the bug with an accepted PR.
- *[April 2023]* Merged 2 PRs at the Transformers repository.
- *[October 2022]* Joined Giga Tech Limited as Machine Learning Engineer.

## Work Experiences

> "Experience is the teacher of all things" - Julius Caesar

### Giga Tech Limited

**Machine Learning Engineer** \| *October 2022 - Present*

My time at [Giga Tech Limited](https://gigatechltd.com/){:target="_blank"} has been a wonderful journey filled with learning and growth. Here, I've had the chance to dive into the world of NLP techniques, all with the goal of making NLP methods in the Bangla language even better. Along the way, I've become comfortable working with complex systems and handle critical tasks. It's been a great experience, full of teamwork, learning, and solving interesting challenges. At Giga Tech Limited, I -

- Accomplished the development and deployment of language model pre-training, data preparation, and fine-tuning pipelines (BERT, XLNet, GPT-2, T5) for the Bangla language.
- Spearheaded research initiatives resulting in the creation of a highly accurate rule-based Lemmatizer specifically designed for Bangla, achieving a 90.17% accuracy rate.
- Developed a comprehensive Bangla text processing toolkit, including normalization techniques that reduced data ambiguity by approximately 32% and streamlined text cleaning functionalities.
- Strengthened code reusability and collaboration by establishing an internal PyPI server for efficient package distribution and increased productivity.

### REVE Systems

**Software Engineer** \| *April 2021 - August 2022*

During my time at [REVE Systems](https://revesoft.com/){:target="_blank"}, I mainly focused on crafting an Automatic Speech Recognition (ASR) system for Bangla. This project was like a thrilling adventure that nudged me to learn, grow, and surpass my boundaries. With every challenge, I embraced new knowledge and skills, setting the stage for the advancement of my career. REVE Systems was like a launchpad that truly helped me flourish as a Machine Learning Engineer. At this organization, I -

- Researched and developed non-streaming and streaming Automatic Speech Recognition (ASR) systems for the Bangla language. Integrated an externally trained Language Model which improved the performances about 2.2 times.
- Explored and studied methods, analyzed data, and contributed to developing a Bangla corpus containing 10,000 hours of speech data with parallel transcriptions.
- Developed a speech-to-text time-alignment module using the CTC segmentation technique, significantly reducing the annotation process time.
- Integrated knowledge distillation based incremental/ continual learning mechanism for ASR by implementing RBKD and EBKD losses for regularization and got 73% coverage on previous test cases which enabled the team to run quick experiments on new data and make the models adopt.
- With limited data developed context-based duplicate question suggestion system using a pre-trained BERT model for the Bangladesh Parliament.
- Developed and exposed APIs for integrating the ML models with applications and gRPC server for streaming speech recognition.

## Publications

### BERT-Based Emotion Classification Approach with Analysis of COVID-19 Pandemic Tweets

Md. Shahad Mahmud Chowhdury and Biprodip Pal; *Applied Informatics for Industry 4.0 by Taylor & Francis; February, 2023*

While social media are broadly used to express opinions and emotions, emotion detection and classification from text is a challenging problem due to the lack of facial or voice expressions. This paper proposes a machine-learning model that, unlike manual feature extraction techniques, leverages the neural attention approach to detect emotions through meaningful feature extraction.

**Firstly,** this research contributes to take a deep learning approach for the classification of six types of emotions from the text using the benchmark ISEAR dataset.

**Secondly,** The model predictions have been explained using the model agnostic approach. Thirdly, emotions in the tweets related to COVID-19 have been classified and quantified along with an illustration of the emotion dynamics during the Corona Pandemic before and after the start of the vaccination.

**Finally,** N-gram analysis has been used for the summarization of the contributing factors. In terms of emotion classification from ISEAR data, our approach comes out with a better F1 score of .72 compared to some other state-of-the-art works.
