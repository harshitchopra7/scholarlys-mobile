import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Button, Pressable, TextInput, ScrollView } from 'react-native';
import TEXTS from '../../constants/constants';
import GlobalStyles from '../../GlobalStyles/GlobalStyles';

const FeedDescription = () => {

    var title = "Assessing factors associated with social connectedness in adults with mobility disabilities";
    var abstract = "BackgroundDigital storytelling (DST), which combines traditional storytelling with digital tools, can provide a narrative pedagogy that promotes critical thinking (CT). However, we found no previous study in medical education.Materials and methodsThe aim of the study was to investigate if DST can promote CT and, if so, which CT skills were improved. Thirty-two students participated in a non-equivalent control group pretest-posttest research study, with 16 in each group. The participants were fifth-year medical students on a hematology rotation. We compared the routine instructional method (control group) with DST (intervention group). The measures of CT used for the pre- and post-test in both groups was the Health Science Reasoning Test (HRST) and knowledge test. We also evaluated the satisfaction of the students in DST group. We used Paired and independent t-tests for comparing the mean scores. To eliminate the confounding effect of pre-test on the results of the intervention, the ANCOVA test was used.ResultsThere was no significant difference in the overall CT pretest scores (P-value = 0.51) between the control and intervention groupsbut the difference was significant for the post-test scores (P-value = 0.03). Although post-test scores showed a significant increase (P-value = 0.002) compared to pre-test scores in the intervention group, no significant increase was observed in the control group (P-value = 0.26). Most students considered that DST improved their CT, deep learning, communication skills and team-working.ConclusionsThe study demonstrated that DST promoted CT. We recommend the use of DST to promote CT in clinical education placements."
    var author = "Test Name"

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={styles.feed_description_container}>
                <Text style={styles.feed_description_title}>{title}</Text>
                <Text style={{ fontWeight: '700', fontSize: 15 }}>{TEXTS.AUTHOR}:
                    <Text style={{ fontWeight: '400' }}> {author}</Text>
                </Text>
                <Text style={styles.feed_description_abstract}>
                    <Text>{abstract}</Text>
                </Text>
                <Text style={styles.feed_description_full_text}>{TEXTS.FULL_TEXT}</Text>
            </View>
        </SafeAreaView>
    )
}
export default FeedDescription;

const styles = StyleSheet.create({
    feed_description_container: {
        margin: 20,
    },
    feed_description_title: {
        fontSize: 16.5,
        fontWeight: '700',
        marginBottom: 20,
    },
    feed_description_abstract: {
        marginTop: 10,
        fontSize: 15,
        textAlign: 'justify',
    },
    feed_description_full_text: {
        color: '#4285f4',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 15,
    },
})
