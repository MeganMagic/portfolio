import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import { labels, skillCategoryLabels } from "./labels";

import type { ResumeData } from "./resumeData";

const COLOR = {
  text: "#1f2328",
  muted: "#5c6470",
  faint: "#8b939f",
  rule: "#d8dce2",
  accent: "#007aff",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 44,
    paddingBottom: 52,
    paddingHorizontal: 46,
    fontFamily: "Pretendard",
    fontSize: 9.5,
    lineHeight: 1.55,
    color: COLOR.text,
  },

  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
  name: { fontSize: 22, fontWeight: 700, letterSpacing: -0.5 },
  role: { fontSize: 10, color: COLOR.muted, marginTop: 3 },
  contact: { alignItems: "flex-end" },
  contactRow: { flexDirection: "row", fontSize: 9 },
  contactLabel: { color: COLOR.faint, width: 42, textAlign: "right", marginRight: 6 },
  contactValue: { color: COLOR.muted },
  headerRule: { borderBottomWidth: 1.2, borderBottomColor: COLOR.text, marginTop: 12 },

  section: { marginTop: 18 },
  sectionTitle: { fontSize: 10, fontWeight: 700, color: COLOR.accent, letterSpacing: 0.3 },
  sectionRule: { borderBottomWidth: 0.6, borderBottomColor: COLOR.rule, marginTop: 5, marginBottom: 9 },

  entry: { marginBottom: 11 },
  entryHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  entryTitle: { fontSize: 11.5, fontWeight: 600 },
  entryPeriod: { fontSize: 9, color: COLOR.faint },
  entrySub: { fontSize: 9, color: COLOR.muted, marginTop: 1 },

  bullet: { flexDirection: "row", marginTop: 3.5 },
  bulletDot: { width: 9, color: COLOR.faint },
  bulletText: { flex: 1 },

  summaryItem: { marginBottom: 8 },
  summaryTitle: { fontSize: 10.5, fontWeight: 600, marginBottom: 2 },

  projectSummary: { color: COLOR.muted, marginTop: 2 },
  stack: { fontSize: 8.5, color: COLOR.faint, marginTop: 4 },

  skillRow: { flexDirection: "row", marginBottom: 4 },
  skillCategory: { width: 96, fontSize: 9, fontWeight: 600, color: COLOR.muted },
  skillItems: { flex: 1, fontSize: 9 },

  compactRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", marginBottom: 5 },
  compactMain: { flex: 1, paddingRight: 10 },
  compactTitle: { fontSize: 10.5, fontWeight: 600 },
  compactSub: { fontSize: 9, color: COLOR.muted },

  footer: {
    position: "absolute",
    bottom: 26,
    left: 46,
    right: 46,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    color: COLOR.faint,
  },
});

const Bullet = ({ children }: { children: string }) => (
  <View style={styles.bullet}>
    <Text style={styles.bulletDot}>•</Text>
    <Text style={styles.bulletText}>{children}</Text>
  </View>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionRule} />
    {children}
  </View>
);

interface ResumeDocumentProps {
  data: ResumeData;
  /** Passed in rather than computed here so rendering stays deterministic. */
  generatedAt: string;
}

const ResumeDocument = ({ data, generatedAt }: ResumeDocumentProps) => {
  const t = labels[data.locale];
  const skillLabel = skillCategoryLabels[data.locale];

  return (
    <Document title={`${data.name} ${t.role}`} author={data.name} creator={data.name} producer={data.name}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header} fixed={false}>
          <View>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.role}>{t.role}</Text>
          </View>
          <View style={styles.contact}>
            <View style={styles.contactRow}>
              <Text style={styles.contactLabel}>{t.email}</Text>
              <Text style={styles.contactValue}>{data.contact.email}</Text>
            </View>
            <View style={styles.contactRow}>
              <Text style={styles.contactLabel}>{t.phone}</Text>
              <Text style={styles.contactValue}>{data.contact.phone}</Text>
            </View>
            <View style={styles.contactRow}>
              <Text style={styles.contactLabel}>{t.github}</Text>
              <Text style={styles.contactValue}>{data.contact.github}</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerRule} />

        <Section title={t.summary}>
          {data.summary.map(item => (
            <View key={item.title} style={styles.summaryItem} wrap={false}>
              <Text style={styles.summaryTitle}>{item.title}</Text>
              {item.lines.map(line => (
                <Text key={line}>{line}</Text>
              ))}
            </View>
          ))}
        </Section>

        <Section title={t.experience}>
          {data.experience.map(exp => (
            <View key={exp.title} style={styles.entry}>
              <View style={styles.entryHead}>
                <Text style={styles.entryTitle}>{exp.title}</Text>
                <Text style={styles.entryPeriod}>{exp.period}</Text>
              </View>
              {exp.subTitle.map(line => (
                <Text key={line} style={styles.entrySub}>
                  {line}
                </Text>
              ))}
              {exp.items.map(item => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </View>
          ))}
        </Section>

        <Section title={t.projects}>
          {data.projects.map(project => (
            <View key={project.title} style={styles.entry}>
              <View style={styles.entryHead}>
                <Text style={styles.entryTitle}>{project.title}</Text>
                <Text style={styles.entryPeriod}>
                  {project.company} · {project.period}
                </Text>
              </View>
              <Text style={styles.projectSummary}>{project.summary}</Text>
              {project.points.map(point => (
                <Bullet key={point}>{point}</Bullet>
              ))}
              {project.stack.length > 0 && (
                <Text style={styles.stack}>
                  {t.stack} · {project.stack.join(", ")}
                </Text>
              )}
            </View>
          ))}
        </Section>

        <Section title={t.skills}>
          {data.skills.map(group => (
            <View key={group.category} style={styles.skillRow} wrap={false}>
              <Text style={styles.skillCategory}>{skillLabel[group.category] ?? group.category}</Text>
              <Text style={styles.skillItems}>{group.items.join(", ")}</Text>
            </View>
          ))}
        </Section>

        <Section title={t.education}>
          {data.education.map(edu => (
            <View key={edu.title} style={styles.compactRow} wrap={false}>
              <View style={styles.compactMain}>
                <Text style={styles.compactTitle}>{edu.title}</Text>
                <Text style={styles.compactSub}>{edu.subTitle}</Text>
              </View>
              <Text style={styles.entryPeriod}>{edu.period}</Text>
            </View>
          ))}
        </Section>

        {data.certification.length > 0 && (
          <Section title={t.certification}>
            {data.certification.map(cert => (
              <View key={cert.title} style={styles.compactRow} wrap={false}>
                <View style={styles.compactMain}>
                  <Text style={styles.compactTitle}>{cert.title}</Text>
                  <Text style={styles.compactSub}>{cert.subTitle}</Text>
                </View>
                <Text style={styles.entryPeriod}>{cert.period}</Text>
              </View>
            ))}
          </Section>
        )}

        <View style={styles.footer} fixed>
          <Text>
            {data.name} · {t.generatedAt} {generatedAt}
          </Text>
          <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
};

export default ResumeDocument;
