package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "tourments")
public class Tourments {
    @Id
    private Long id;
    private String name;
    @Column(name = "rules", columnDefinition = "text")
    private String rules;
    private LocalDateTime startAt;
    private LocalDateTime endAt;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToMany(mappedBy = "tourments")
    private List<EventContent> eventContents;
}

