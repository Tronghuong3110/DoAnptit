package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Table(name = "event_content")
@Entity
public class EventContent {
    @Id
    private Long id;
    private String name;
    @Column(name = "description", columnDefinition = "text")
    private String description;

    @ManyToMany
    @JoinTable(name = "tour_event_content",
    joinColumns = @JoinColumn(name = "event_content_id"),
    inverseJoinColumns = @JoinColumn(name = "tour_id"))
    private List<Tourments> tourments;
}
